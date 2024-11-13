import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, Modal, View, TextInput, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExerciseCard from '../components/ExcerciseCard';
import styles from '../styles/exercisesScreenStyles';
import { RootStackParamList } from '../components/navigation/AppNavigator'; 

type Exercise = {
    id: number;
    muscle: string;
    name: string;
    description: string;
    image: string;
};

export default function ExercisesScreen() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, 'exercisesScreen'>>();
    const { routineId } = route.params;
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    // Campos de entrada para un nuevo ejercicio
    const [newExerciseName, setNewExerciseName] = useState('');
    const [newExerciseMuscle, setNewExerciseMuscle] = useState('');
    const [newExerciseDescription, setNewExerciseDescription] = useState('');

    const defaultImage = 'https://via.placeholder.com/100'; // URL de imagen predeterminada

    const loadExercises = async () => {
        try {
            const storedExercises = await AsyncStorage.getItem(`@exercises_${routineId}`);
            if (storedExercises) {
                setExercises(JSON.parse(storedExercises));
            }
        } catch (error) {
            console.error('Error al cargar ejercicios:', error);
        }
    };

    const saveExercises = async (newExercises: Exercise[]) => {
        try {
            await AsyncStorage.setItem(`@exercises_${routineId}`, JSON.stringify(newExercises));
        } catch (error) {
            console.error('Error al guardar ejercicios:', error);
        }
    };

    const deleteExercise = async (id: number) => {
        const updatedExercises = exercises.filter(exercise => exercise.id !== id);
        setExercises(updatedExercises);
        await saveExercises(updatedExercises);
    };

    useEffect(() => {
        loadExercises();
    }, []);

    // Función para agregar un nuevo ejercicio
    const addExercise = () => {
        if (!newExerciseName.trim() || !newExerciseMuscle.trim()) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }

        const newExercise: Exercise = {
            id: Math.floor(Math.random() * 1000),
            muscle: newExerciseMuscle,
            name: newExerciseName,
            description: newExerciseDescription,
            image: defaultImage, // Asigna la imagen predeterminada
        };

        const updatedExercises = [...exercises, newExercise];
        setExercises(updatedExercises);
        saveExercises(updatedExercises);

        // Cierra el modal y reinicia los campos de entrada
        setModalVisible(false);
        setNewExerciseName('');
        setNewExerciseMuscle('');
        setNewExerciseDescription('');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Ejercicios de la Rutina</Text>

            {exercises.map((exercise) => (
                <ExerciseCard
                    key={exercise.id}
                    exercise={exercise}
                    onPress={() => navigation.navigate('series')}
                    onDelete={() => deleteExercise(exercise.id)}
                />
            ))}

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Agregar Ejercicio</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Agregar Nuevo Ejercicio</Text>

                        <Text style={styles.label}>Nombre del ejercicio</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ejemplo: Sentadillas"
                            value={newExerciseName}
                            onChangeText={setNewExerciseName}
                        />

                        <Text style={styles.label}>Musculo objetivo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ejemplo: Piernas"
                            value={newExerciseMuscle}
                            onChangeText={setNewExerciseMuscle}
                        />

                        <Text style={styles.label}>Descripcion del ejercicio</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Descripción breve"
                            value={newExerciseDescription}
                            onChangeText={setNewExerciseDescription}
                        />

                        <TouchableOpacity style={styles.modalButton} onPress={addExercise}>
                            <Text style={styles.modalButtonText}>Guardar Ejercicio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalCloseButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
