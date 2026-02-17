import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const WORKOUT_KEY = 'workout_key';
const EXERCISE_KEY = 'exercises_key';
const BMI_KEY = 'BMI_KEY';
const STEPS_KEY = 'STEPS_KEY';

function WorkoutHistory() {
    const [workout, setWorkout] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [BMI, setBMI] = useState([]);
    const [stepsHistory, setStepsHistory] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) return;

        const fetchData = async () => {
            try {
                const workoutData = await AsyncStorage.getItem(WORKOUT_KEY);
                const exerciseData = await AsyncStorage.getItem(EXERCISE_KEY);
                const bmiData = await AsyncStorage.getItem(BMI_KEY);
                const stepsData = await AsyncStorage.getItem(STEPS_KEY);

                if (workoutData) setWorkout(JSON.parse(workoutData));
                if (exerciseData) setExercise(JSON.parse(exerciseData));
                if (bmiData) setBMI(JSON.parse(bmiData));
                if (stepsData) setStepsHistory(JSON.parse(stepsData));
            } catch (error) {
                console.error("Eroare la citirea datelor:", error);
            }
        };

        fetchData();
    }, [isFocused]);

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'Subponderal';
        if (bmi < 24.9) return 'Normal';
        if (bmi < 29.9) return 'Supraponderal';
        return 'Obez';
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout History</Text>
            <FlatList
                data={workout}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.item, styles.workoutItem]}>
                        <Text style={styles.itemText}>Exercițiu: {item.text}</Text>
                        <Text style={styles.itemText}>Timp: {item.time}</Text>
                        <Text style={styles.itemText}>Data: {item.date}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Niciun workout salvat.</Text>}
            />

            <Text style={styles.title}>Lista Exercițiilor</Text>
            <FlatList
                data={exercise}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.item, styles.exerciseItem]}>
                        <Text style={styles.itemText}>Exercițiu: {item.exercise}</Text>
                        <Text style={styles.itemText}>Seturi: {item.sets}</Text>
                        <Text style={styles.itemText}>Repetări: {item.reps}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Niciun exercițiu salvat.</Text>}
            />

            <Text style={styles.title}>BMI Istoric</Text>
            <FlatList
                data={BMI}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.item, styles.bmiItem]}>
                        <Text style={styles.itemText}>Vârstă: {item.age} ani</Text>
                        <Text style={styles.itemText}>Înălțime: {item.height} cm</Text>
                        <Text style={styles.itemText}>Greutate: {item.weight} kg</Text>
                        <Text style={styles.itemText}>
                            Indice BMI: {item.bmi} ({getBMICategory(item.bmi)})
                        </Text>
                        <Text style={styles.itemText}>Data înregistrării: {item.date}</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Nicio înregistrare BMI salvată.</Text>}
            />

            <Text style={styles.title}>Istoric Pași</Text>
            <FlatList
                data={stepsHistory}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.item, styles.stepsItem]}>
                        <Text style={styles.itemText}>Data: {item.date}</Text>
                        <Text style={styles.itemText}>Pași: {item.steps}</Text>
                        <Text style={styles.itemText}>Distanță: {item.distance.toFixed(2)} km</Text>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.empty}>Nicio înregistrare de pași salvată.</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ecf0f1',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginVertical: 10,
        textAlign: 'center',
    },
    item: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    workoutItem: {
        backgroundColor: '#dff9fb',
    },
    exerciseItem: {
        backgroundColor: '#f6e58d',
    },
    bmiItem: {
        backgroundColor: '#dcd3ff',
    },
    stepsItem: {
        backgroundColor: '#c7ecee',
    },
    itemText: {
        fontSize: 18,
        color: '#2d3436',
        marginBottom: 4,
    },
    empty: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#888',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default WorkoutHistory;
