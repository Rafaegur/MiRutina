import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExerciseCard from '../components/ExcerciseCard';
import styles from '../styles/exercisesScreenStyles'; 

export default function ExercisesScreen() {
    const navigation = useNavigation(); 
    const [exercises, setExercises] = useState([
        {
            id: 1,
            muscle: 'Pecho',
            name: 'Press de Banca',
            description: 'Ejercicio para trabajar el pecho.',
            image: 'https://www.dhzfitness.com/uploads/pectoralis-major.jpg',
        },
        {
            id: 2,
            muscle: 'Hombros',
            name: 'Press Militar',
            description: 'Ejercicio para trabajar hombros con barra',
            image: 'https://media.istockphoto.com/id/533845828/es/foto/deltoris-m%C3%BAsculos-anterior-de-la-anatom%C3%ADa-m%C3%BAsculos-aislado-sobre-blanco.jpg?s=612x612&w=0&k=20&c=08Szy-9VJSciUsSk3U95EcE_QU88gw-7tqRaBwrxid0=',
        },
    ]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ejercicios</Text>
            
            {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    onPress={() => navigation.navigate('series')}
                />
            ))}

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Agregar Ejercicio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

