import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function exercises() {
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
            <Text style={styles.title}>Crear Nueva Rutina</Text>

            {exercises.map((exercise) => (
                <View key={exercise.id} style={styles.card}>
                    <Image source={{ uri: exercise.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.muscle}>{exercise.muscle}</Text>
                        <Text style={styles.name}>{exercise.name}</Text>
                        <Text style={styles.description}>{exercise.description}</Text>
                    </View>
                </View>
            ))}

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Agregar Ejercicio</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    muscle: {
        fontSize: 14,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        fontSize: 12,
        color: 'gray',
    },
    addButton: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 16,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
