import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const BMI_KEY = 'BMI_KEY';

function BMICalculator({ navigation }) {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bmiResult, setBmiResults] = useState(null);

    const validateForm = () => {
        if (!age || !weight || !height || !gender) {
            alert('Please complete all fields');
        } else {
            countBMI();
        }
    };

    const countBMI = () => {
        const bmi = (
            parseFloat(weight) /
            (parseFloat(height) / 100) ** 2
        ).toFixed(2);

        const ageValue = parseInt(age);
        let normalRange = [18.5, 24.9];

        if (gender === 'male') {
            if (ageValue >= 18 && ageValue <= 24) normalRange = [20, 25];
            else if (ageValue <= 34) normalRange = [21, 26];
            else if (ageValue <= 44) normalRange = [22, 27];
            else if (ageValue <= 54) normalRange = [23, 28];
            else normalRange = [24, 29];
        } else if (gender === 'female') {
            if (ageValue >= 18 && ageValue <= 24) normalRange = [19, 24];
            else if (ageValue <= 34) normalRange = [20, 25];
            else if (ageValue <= 44) normalRange = [21, 26];
            else if (ageValue <= 54) normalRange = [22, 27];
            else normalRange = [23, 28];
        }

        let result = '';
        if (bmi < normalRange[0]) result = 'Underweight';
        else if (bmi <= normalRange[1]) result = 'Healthy';
        else if (bmi <= 29.9) result = 'Overweight';
        else if (bmi <= 34.9) result = 'Obese';
        else result = 'Extremely Obese';

        const bmiObject = { bmi, result, normalRange, age: ageValue };
        setBmiResults(bmiObject);
        saveBMI(bmiObject);
    };

    const saveBMI = async (bmiData) => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('ro-RO');

        const newBmi = {
            id: Date.now().toString(),
            height: parseInt(height),
            weight: parseInt(weight),
            age: parseInt(age),
            bmi: bmiData.bmi,
            date: formattedDate,
        };

        try {
            const storedData = await AsyncStorage.getItem(BMI_KEY);
            const bmiHistory = storedData ? JSON.parse(storedData) : [];
            const updatedBMI = [...bmiHistory, newBmi];
            await AsyncStorage.setItem(BMI_KEY, JSON.stringify(updatedBMI));
            alert('BMI calculated and saved!');
        } catch (e) {
            console.log(e);
            alert('Failed to save BMI.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>BMI Calculator</Text>
            <View style={styles.form}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Age</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter age"
                        onChangeText={setAge}
                        value={age}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Weight (Kg)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter weight"
                        onChangeText={setWeight}
                        value={weight}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Height (cm)</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter height"
                        onChangeText={setHeight}
                        value={height}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.genderRow}>
                    <TouchableOpacity
                        style={[
                            styles.genderButton,
                            gender === 'male' && styles.selectedGender,
                        ]}
                        onPress={() => setGender('male')}
                    >
                        <Text style={styles.genderText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.genderButton,
                            gender === 'female' && styles.selectedGender,
                        ]}
                        onPress={() => setGender('female')}
                    >
                        <Text style={styles.genderText}>Female</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={validateForm}>
                    <Text style={styles.submitButtonText}>Calculate BMI</Text>
                </TouchableOpacity>

                {bmiResult && (
                    <View
                        style={[
                            styles.resultContainer,
                            {
                                backgroundColor:
                                    bmiResult.result === 'Underweight'
                                        ? '#f9c74f'
                                        : bmiResult.result === 'Healthy'
                                            ? '#90be6d'
                                            : bmiResult.result === 'Overweight'
                                                ? '#f8961e'
                                                : bmiResult.result === 'Obese'
                                                    ? '#f3722c'
                                                    : '#f94144',
                                borderRadius: 10,
                                padding: 15,
                            },
                        ]}
                    >
                        <Text style={styles.resultLabel}>BMI: {bmiResult.bmi}</Text>
                        <Text style={styles.resultText}>Result: {bmiResult.result}</Text>
                        <Text style={styles.resultText}>
                            Normal BMI Range for your age ({bmiResult.age}):{' '}
                            {bmiResult.normalRange[0]} – {bmiResult.normalRange[1]}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef2f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#289df6',
        marginBottom: 20,
    },
    form: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        width: '90%',
        elevation: 5,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    textInput: {
        flex: 2,
        height: 40,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingLeft: 10,
        fontSize: 16,
    },
    genderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    genderButton: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbeffe',
        padding: 10,
        margin: 10,
    },
    selectedGender: {
        backgroundColor: '#289df6',
    },
    genderText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    submitButton: {
        backgroundColor: '#289df6',
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    resultContainer: {
        marginTop: 20,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#fff',
    },
    resultText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default BMICalculator;
