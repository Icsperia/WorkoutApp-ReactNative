import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WorkOutApp</Text>

            <View style={styles.buttonGrid}>


                <TouchableOpacity style={[styles.button, styles.stepCounter]} onPress={() => navigation.navigate('StepCounter')}>
                    <Text style={styles.buttonText}>Step Counter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.stopwatch]} onPress={() => navigation.navigate('Stopwatch')}>
                    <Text style={styles.buttonText}>Stopwatch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.bmi]} onPress={() => navigation.navigate('BMICalculator')}>
                    <Text style={styles.buttonText}>BMI Calculator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.history]} onPress={() => navigation.navigate('WorkoutHistory')}>
                    <Text style={styles.buttonText}>Workout History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.exercices]} onPress={() => navigation.navigate('AddExercices')}>
                    <Text style={styles.buttonText}>Exercices</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.planuri]} onPress={() => navigation.navigate('PlanuriAlimentare')}>
                    <Text style={styles.buttonText}>PlanuriAlimentare</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: "#2c3e50",
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, // fixăm o lățime totală care încap butoane pătrate
    },
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0, // pătrate clare, fără colțuri rotunjite (opțional)
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    home: {
        backgroundColor: '#1abc9c',
    },
    stepCounter: {
        backgroundColor: '#2ecc71',
    },
    stopwatch: {
        backgroundColor: '#9b59b6',
    },
    bmi: {
        backgroundColor: '#e67e22',
    },
    history: {
        backgroundColor: '#e74c3c',
    },
    exercices: {
        backgroundColor: '#34495e',
    },
    planuri: {
        backgroundColor: '#f39c12',
    },
});
