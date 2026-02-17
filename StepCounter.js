import React, { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function StepCounter() {
    const [steps, setSteps] = useState(0);
    const [distance, setDistance] = useState(0);
    const [lastStepTime, setLastStepTime] = useState(0);
    const [lastMagnitude, setLastMagnitude] = useState(0);

    const STEPS_KEY = 'STEPS_KEY';
    const STEP_LENGTH = 0.8;


    useEffect(() => {
        Accelerometer.setUpdateInterval(100);

        const subscription = Accelerometer.addListener(({ x, y, z }) => {
            const magnitude = Math.sqrt(x * x + y * y + z * z);
            const now = Date.now();

            const stepThreshold = 1.135;
            const cooldown = 350;
            const maxSpike = 3.0;

            if (
                magnitude > stepThreshold &&
                magnitude < maxSpike &&
                lastMagnitude <= stepThreshold &&
                now - lastStepTime > cooldown
            ) {
                setSteps(prev => {
                    const newSteps = prev + 1;
                    setDistance((newSteps * STEP_LENGTH) / 1000);
                    return newSteps;
                });
                setLastStepTime(now);
            }

            setLastMagnitude(magnitude);
        });

        return () => subscription.remove();
    }, [lastStepTime, lastMagnitude]);


    useEffect(() => {
        const interval = setInterval(() => {
            saveSteps();
        }, 10000);

        return () => clearInterval(interval);
    }, [steps, distance]);


    const saveSteps = async () => {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('ro-RO');

        const newEntry = {
            id: Date.now(),
            date: formattedDate,
            steps,
            distance: Number(distance.toFixed(3)),
        };

        try {
            const storedData = await AsyncStorage.getItem(STEPS_KEY);
            const stepsHistory = storedData ? JSON.parse(storedData) : [];

            const updatedSteps = [...stepsHistory, newEntry];

            await AsyncStorage.setItem(STEPS_KEY, JSON.stringify(updatedSteps));
            console.log("Steps saved:", newEntry);
        } catch (error) {
            console.error("Failed to save steps:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.step}>{steps}</Text>
                <Text style={styles.label}>Pași</Text>
                <Text style={styles.distance}>
                    Distanță: {distance.toFixed(2)} KM
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    step: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    label: {
        fontSize: 18,
        marginTop: 8,
        color: '#7f8c8d',
    },
    distance: {
        fontSize: 20,
        marginTop: 12,
        color: '#34495e',
        fontWeight: '600',
    },
});

export default StepCounter;
