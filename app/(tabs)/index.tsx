import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutineCard from '../../components/RoutineCard';
import styles from '../../styles/indexStyles';

interface Routine {
    id: number;  // Agregar un 'id' único para cada rutina
    imageUri: string;
    title: string;
    subtitle: string;
    description: string[];  // Mantenemos 'string[]' para la descripción
}

export default function HomeScreen() {
    const navigation = useNavigation();

    // Especificamos explícitamente el tipo de 'routines' como un arreglo de objetos 'Routine'
    const [routines, setRoutines] = useState<Routine[]>([]);

    // Función para cargar las rutinas desde AsyncStorage
    const loadRoutines = async () => {
        try {
            const storedRoutines = await AsyncStorage.getItem('@routines');
            if (storedRoutines) {
                setRoutines(JSON.parse(storedRoutines));  // Deberíamos recibir un arreglo de 'Routine[]'
            }
        } catch (error) {
            console.error('Error al cargar rutinas:', error);
        }
    };

    // Función para guardar rutinas en AsyncStorage
    const saveRoutines = async (newRoutines: Routine[]) => {
        try {
            await AsyncStorage.setItem('@routines', JSON.stringify(newRoutines));
        } catch (error) {
            console.error('Error al guardar rutinas:', error);
        }
    };

    // Función para eliminar una rutina por su 'id'
    const deleteRoutine = async (id: number) => {
        const updatedRoutines = routines.filter((routine) => routine.id !== id); // Filtramos la rutina por 'id'
        setRoutines(updatedRoutines);  // Actualizamos el estado
        saveRoutines(updatedRoutines);  // Guardamos el nuevo arreglo de rutinas en AsyncStorage
    };

    // Cargar rutinas al montar el componente
    useEffect(() => {
        loadRoutines();
    }, []);

    // Función para agregar una nueva rutina
    const addRoutine = () => {
        // Aquí especificamos explícitamente el tipo de 'newRoutine' como 'Routine'
        const newRoutine: Routine = {
            id: Math.floor(Math.random() * 1000),  // Generamos un 'id' único
            imageUri: 'https://static.vecteezy.com/system/resources/previews/017/064/096/non_2x/weight-gym-icon-free-vector.jpg',
            title: `Rutina Nueva`,
            subtitle: `Rutina personalizada`,
            description: ['Ejercicio adicional', 'Series avanzadas'],  // 'description' es un arreglo de string
        };

        // Aquí el tipo de 'updatedRoutines' es explícitamente 'Routine[]' (arreglo de rutinas)
        const updatedRoutines: Routine[] = [...routines, newRoutine];

        // Actualizamos el estado con 'updatedRoutines', que es un arreglo de 'Routine[]'
        setRoutines(updatedRoutines);

        // Guardamos las rutinas en AsyncStorage
        saveRoutines(updatedRoutines);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis rutinas</Text>

            {routines.map((routine) => (
                <View key={routine.id} style={styles.card}>
                    <RoutineCard
                        imageUri={routine.imageUri}
                        title={routine.title}
                        subtitle={routine.subtitle}
                        description={routine.description}
                        onPress={() => navigation.navigate('exercisesScreen')}
                    />
                    {/* Botón para eliminar rutina */}
                    <TouchableOpacity onPress={() => deleteRoutine(routine.id)} style={styles.deleteButton}>
                        <Text style={styles.deleteButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            ))}

            {/* Botón para agregar una nueva rutina */}
            <TouchableOpacity style={styles.addButton} onPress={addRoutine}>
                <Text style={styles.addButtonText}>+ Nueva rutina</Text>
            </TouchableOpacity>
        </View>
    );
}
