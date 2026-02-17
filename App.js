import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepCounter from './StepCounter';
import Stopwatch from './Stopwatch';
import BMICalculator from './BMICalculator';
import WorkoutHistory from './WorkoutHistory';
import AddExercices from './AddExercises';
import PlanuriAlimentare from './PlanuriAlimentare';
import PiramidaAlimentelor from './PiramidaAlimentelor';

import ReteteVegane from './ReteteVegane';
import RetetePentruSlabit from './RetetePentruSlabit';
import PentruMentinere from './PentruMentinere';
import HomeScreen from "./HomeScreen";
import ReteteProteice from "./ReteteProteice";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'StepCounter') {
                        iconName = focused ? 'walk' : 'walk-outline';
                    } else if (route.name === 'Stopwatch') {
                        iconName = focused ? 'timer' : 'timer-outline';
                    } else if (route.name === 'BMICalculator') {
                        iconName = focused ? 'body' : 'body-outline';
                    } else if (route.name === 'HomeScreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'WorkoutHistory') {
                        iconName = focused ? 'clipboard' : 'clipboard-outline';
                    } else if (route.name === 'PlanuriAlimentare') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'AddExercise') {
                        iconName = focused ? 'add' : 'add-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Acasă' }}
            />
            <Tab.Screen
                name="StepCounter"
                component={StepCounter}
                options={{ title: 'Contor de pași' }}
            />
            <Tab.Screen
                name="Stopwatch"
                component={Stopwatch}
                options={{ title: 'Cronometru' }}
            />
            <Tab.Screen
                name="BMICalculator"
                component={BMICalculator}
                options={{ title: 'Calculator IMC' }}
            />

            <Tab.Screen
                name="WorkoutHistory"
                component={WorkoutHistory}
                options={{ title: 'Istoric antrenamente' }}
            />
            <Tab.Screen
                name="AddExercise"
                component={AddExercices}
                options={{ title: 'Add exercise' }}
            />


            <Tab.Screen
                name="PlanuriAlimentare"
                component={PlanuriAlimentare}
                options={{ title: 'Planuri alimentare' }}
            />


        </Tab.Navigator>
    );
}



export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                    options={{ title: '' }}
                />

                <Stack.Screen name="WorkoutHistory" component={WorkoutHistory} />
                <Stack.Screen name="AddExercices" component={AddExercices} />
                <Stack.Screen name="PlanuriAlimentare" component={PlanuriAlimentare} />
                <Stack.Screen name="Piramida Alimentelor" component={PiramidaAlimentelor} />
                <Stack.Screen name="Plan alimentar pentru vegani" component={ReteteVegane} />

                <Stack.Screen name="Plan alimenta pentru slabit" component={RetetePentruSlabit} />
                <Stack.Screen name="PLan alimentar pentru masa musculara" component={ReteteProteice} />
                <Stack.Screen name="Plan alimentar pentru mentinere" component={PentruMentinere} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
