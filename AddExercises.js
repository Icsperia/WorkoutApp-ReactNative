import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_STORAGE_KEY = "exercises_key";

function AddExercises({ navigation }) {
    const [text, setText] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const addExercises = async () => {
        if (text.trim() === '' || sets.trim() === '' || reps.trim() === '') {
            Alert.alert("Please fill out all fields");
            return;
        }

        const newExercise = {
            id: Date.now().toString(),
            exercise: text,
            sets: parseInt(sets),
            reps: parseInt(reps),
        };

        try {
            const storedData = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
            const exercises = storedData ? JSON.parse(storedData) : [];
            const updatedExercises = [...exercises, newExercise];
            await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updatedExercises));

            setText('');
            setSets('');
            setReps('');

            Alert.alert("Exercise saved!");
        } catch (error) {
            console.error("Error saving exercise:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Exercise</Text>
            <View style={styles.form}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Exercise</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter exercise"
                        onChangeText={setText}
                        value={text}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Sets</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter sets"
                        onChangeText={setSets}
                        value={sets}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Reps</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter reps"
                        onChangeText={setReps}
                        value={reps}
                        keyboardType="numeric"
                    />
                </View>


                <TouchableOpacity style={styles.addButton} onPress={addExercises}>

                <Text style={styles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#2c3e50',
    },
    form: {
        marginTop: 20,
    },
    inputRow: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#34495e',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: 120,
        height: 50,
        alignSelf: 'center',
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default AddExercises;
