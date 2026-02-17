import React, {useRef, useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const WORKOUT_KEY = 'workout_key';

function Stopwatch({ navigation }) {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    const [workout, setWorkout] = useState([]);
    const [text, setText] = useState('');

    const startStopwatch = () => {
        startTimeRef.current = Date.now() - time;
        intervalRef.current = setInterval(() => {
            setTime(Date.now() - startTimeRef.current);
        }, 100);
        setRunning(true);
    };

    const pauseStopwatch = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
    };

    const stopStopwatch = () => {
        clearInterval(intervalRef.current);
        setRunning(false);
        setTime(0);
    };

    const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const ms = Math.floor((milliseconds % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(ms).padStart(2, '0')}`;
    };

    const adaugaWorkout = async () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("ro-RO");
        if (text.trim() === '') return;

        const formattedTime = formatTime(time);

        const newWorkout = {
            id: Date.now(),
            text: text,
            time: formattedTime,
            date: formattedDate
        };

        try {
            const storedData = await AsyncStorage.getItem(WORKOUT_KEY);
            const existingWorkout = storedData ? JSON.parse(storedData) : [];

            const updatedWorkout = [...existingWorkout, newWorkout];

            await AsyncStorage.setItem(WORKOUT_KEY, JSON.stringify(updatedWorkout));

            setWorkout(updatedWorkout);
            setText('');
            Alert.alert("Workout Saved", "Exercițiul a fost adăugat cu succes!");
        } catch (error) {
            console.error("Eroare la adăugare:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>StopWatch</Text>
            <Text style={styles.timeText}>{formatTime(time)}</Text>

            <View style={styles.buttonContainer}>
                {!running && time > 0 ? (
                    <>
                        <TouchableOpacity onPress={startStopwatch} style={[styles.button, styles.startButton]}>
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={stopStopwatch} style={[styles.button, styles.resetButton]}>
                            <Text style={styles.buttonText}>Stop</Text>
                        </TouchableOpacity>
                    </>
                ) : running ? (
                    <>
                        <TouchableOpacity onPress={pauseStopwatch} style={[styles.button, styles.pauseButton]}>
                            <Text style={styles.buttonText}>Pause</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={stopStopwatch} style={[styles.button, styles.resetButton]}>
                            <Text style={styles.buttonText}>Stop</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <TouchableOpacity style={[styles.button, styles.startButton]} onPress={startStopwatch}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                )}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Add Exercise"
                value={text}
                onChangeText={setText}
            />

            <TouchableOpacity style={[styles.button, styles.addButton]} onPress={adaugaWorkout}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 20,
    },
    timeText: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#34495e',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 30,
    },
    button: {
        width: 120,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        elevation: 2,
    },
    startButton: {
        backgroundColor: '#2ecc71',
    },
    pauseButton: {
        backgroundColor: '#f39c12',
    },
    resetButton: {
        backgroundColor: '#e74c3c',
    },
    addButton: {
        backgroundColor: '#3498db',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#bdc3c7',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        width: '80%',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default Stopwatch;
