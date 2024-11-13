import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExerciseCard from '../components/ExcerciseCard';
import styles from '../styles/exercisesScreenStyles';

type Exercise = {
    id: number;
    muscle: string;
    name: string;
    description: string;
    image: string;
};

export default function ExercisesScreen() {
    const navigation = useNavigation();
    const [exercises, setExercises] = useState<Exercise[]>([]);

    // Función para cargar ejercicios desde AsyncStorage
    const loadExercises = async () => {
        try {
            const storedExercises = await AsyncStorage.getItem('@exercises');
            if (storedExercises) {
                setExercises(JSON.parse(storedExercises));
            }
        } catch (error) {
            console.error('Error al cargar ejercicios:', error);
        }
    };

    // Función para guardar ejercicios en AsyncStorage
    const saveExercises = async (newExercises: Exercise[]) => {
        try {
            await AsyncStorage.setItem('@exercises', JSON.stringify(newExercises));
        } catch (error) {
            console.error('Error al guardar ejercicios:', error);
        }
    };

    // Función para eliminar un ejercicio específico
    const deleteExercise = async (id: number) => {
        const updatedExercises = exercises.filter(exercise => exercise.id !== id);
        setExercises(updatedExercises);
        await saveExercises(updatedExercises);
    };

    // Cargar ejercicios al montar el componente
    useEffect(() => {
        loadExercises();
    }, []);

    // Función para agregar un nuevo ejercicio
    const addExercise = () => {
        const newExercise = {
            id: exercises.length + 1,
            muscle: 'Espalda',
            name: 'Remo',
            description: 'Ejercicio para trabajar la espalda.',
            image: 'https://example.com/espalda.jpg',
        };
        const updatedExercises = [...exercises, newExercise];
        setExercises(updatedExercises);
        saveExercises(updatedExercises);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ejercicios</Text>

            {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    onPress={() => navigation.navigate('series')}
                    onDelete={() => deleteExercise(exercise.id)} // Agregar función de eliminación
                />
            ))}

            <TouchableOpacity style={styles.addButton} onPress={addExercise}>
                <Text style={styles.addButtonText}>+ Agregar Ejercicio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
