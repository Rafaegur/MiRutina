import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutineCard from '../../components/RoutineCard';
import styles from '../../styles/indexStyles';
import { RootStackParamList } from '../../components/navigation/AppNavigator'; 


interface Routine {
    id: number;
    imageUri: string;
    title: string;
    subtitle: string;
    description: string[];
}

export default function HomeScreen() {
    const navigation = useNavigation();
    const [routines, setRoutines] = useState<Routine[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const loadRoutines = async () => {
        try {
            const storedRoutines = await AsyncStorage.getItem('@routines');
            if (storedRoutines) {
                setRoutines(JSON.parse(storedRoutines));
            }
        } catch (error) {
            console.error('Error al cargar rutinas:', error);
        }
    };

    const saveRoutines = async (newRoutines: Routine[]) => {
        try {
            await AsyncStorage.setItem('@routines', JSON.stringify(newRoutines));
        } catch (error) {
            console.error('Error al guardar rutinas:', error);
        }
    };

    const deleteRoutine = async (id: number) => {
        const updatedRoutines = routines.filter((routine) => routine.id !== id);
        setRoutines(updatedRoutines);
        saveRoutines(updatedRoutines);
    };

    useEffect(() => {
        loadRoutines();
    }, []);

    const addRoutine = () => {
        if (!newTitle.trim()) {
            Alert.alert('Error', 'El título de la rutina no puede estar vacío');
            return;
        }

        const newRoutine: Routine = {
            id: Math.floor(Math.random() * 1000),
            imageUri: 'https://static.vecteezy.com/system/resources/previews/017/064/096/non_2x/weight-gym-icon-free-vector.jpg',
            title: newTitle,
            subtitle: 'Rutina personalizada',
            description: [newDescription],
        };

        const updatedRoutines = [...routines, newRoutine];
        setRoutines(updatedRoutines);
        saveRoutines(updatedRoutines);

        // Cierra el modal y reinicia los campos de entrada
        setModalVisible(false);
        setNewTitle('');
        setNewDescription('');
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
                        onPress={() => navigation.navigate('exercisesScreen', { routineId: routine.id })}
                    />
                    <TouchableOpacity onPress={() => deleteRoutine(routine.id)} style={styles.deleteButton}>
                        <Text style={styles.deleteButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            ))}

            {/* Botón para abrir el modal de nueva rutina */}
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Nueva rutina</Text>
            </TouchableOpacity>

            {/* Modal para crear una nueva rutina */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Crear nueva rutina</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Título de la rutina"
                            value={newTitle}
                            onChangeText={setNewTitle}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Descripción de la rutina"
                            value={newDescription}
                            onChangeText={setNewDescription}
                        />

                        <TouchableOpacity style={styles.modalButton} onPress={addRoutine}>
                            <Text style={styles.modalButtonText}>Guardar rutina</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCloseButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
