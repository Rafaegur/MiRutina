// ExerciseCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/exerciseCardStyles';

type Exercise = {
    id: number;
    muscle: string;
    name: string;
    description: string;
    image: string;
};

type ExerciseCardProps = {
    exercise: Exercise;
    onPress: () => void;
    onDelete: () => void; // Nueva prop para eliminar
};

export default function ExerciseCard({ exercise, onPress, onDelete }: ExerciseCardProps) {
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: exercise.image }} style={styles.image} />
                <Text style={styles.name}>{exercise.name}</Text>
                <Text style={styles.description}>{exercise.description}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
}
