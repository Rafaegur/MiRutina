import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../app/(tabs)/index';
import ExercisesScreen from '../../app/exercisesScreen';
import Series from '../../app/series'; 

export type RootStackParamList = {
    HomeScreen: undefined;
    exercisesScreen: { routineId: number };
    seriesScreen: {
        exerciseId: number;
        exerciseName: string;
        exerciseMuscle: string;
        exerciseImage?: string;
    };
};

const Stack = createStackNavigator<RootStackParamList>();
