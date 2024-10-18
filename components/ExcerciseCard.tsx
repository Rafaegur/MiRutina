import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExerciseCard({ exercise, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: exercise.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.muscle}>{exercise.muscle}</Text>
                <Text style={styles.name}>{exercise.name}</Text>
                <Text style={styles.description}>{exercise.description}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 10,
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 16,
        borderRadius: 100,
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
});
