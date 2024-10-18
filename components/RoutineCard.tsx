// RoutineCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface RoutineCardProps {
    imageUri: string;
    title: string;
    subtitle: string;
    description: string[];
    onPress: () => void;
}

const RoutineCard: React.FC<RoutineCardProps> = ({ imageUri, title, subtitle, description, onPress }) => {
    return (
        <TouchableOpacity style={styles.routineCard} onPress={onPress}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.routineSubtitle}>{subtitle}</Text>
                <Text style={styles.routineTitle}>{title}</Text>
                {description.map((text, index) => (
                    <Text key={index}>{text}</Text>
                ))}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    routineCard: {
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
        backgroundColor: '#D9D9D9',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    routineTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    routineSubtitle: {
        fontSize: 14,
        marginBottom: 4,
        color: 'gray',
    },
});

export default RoutineCard;
