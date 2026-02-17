import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';



function PlanuriAlimentare({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Planuri Alimentare</Text>

            <View style={styles.buttonGrid}>
                <TouchableOpacity style={[styles.button, styles.b1]} onPress={() => navigation.navigate('Piramida Alimentelor')}>
                    <Text style={styles.buttonText}>Despre piramida alimentelor</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.b2]} onPress={() => navigation.navigate('Plan alimentar pentru vegani')}>
                    <Text style={styles.buttonText}>Plan alimentar vegan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.b3]} onPress={() => navigation.navigate('Plan alimentar pentru mentinere')}>
                    <Text style={styles.buttonText}>Plan alimentar pentru mentinere </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.b4]} onPress={() => navigation.navigate('Plan alimenta pentru slabit')}>
                    <Text style={styles.buttonText}>Plan alimentar pentru slabit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.b5]} onPress={() => navigation.navigate('PLan alimentar pentru masa musculara')}>
                    <Text style={styles.buttonText}>Plan alimentar pentru crestere in masa musculara</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        color: "#2c3e50",
        textAlign: 'center',
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    b1: { backgroundColor: '#1abc9c' },
    b2: { backgroundColor: '#e67e22' },
    b3: { backgroundColor: '#9b59b6' },
    b4: { backgroundColor: '#e74c3c' },
    b5: { backgroundColor: '#2980b9' },
});

export default PlanuriAlimentare;
