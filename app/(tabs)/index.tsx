import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

export default function HomeScreen() {
    const navigation = useNavigation(); // Obtén acceso a la navegación

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis rutinas</Text>

            <View style={styles.routineCard}>
                <Image
                    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/017/064/096/non_2x/weight-gym-icon-free-vector.jpg' }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.routineSubtitle}>Cuarta rutina</Text>
                    <Text style={styles.routineTitle}>Rutina Octubre-Nov</Text>
                    <Text>Mas foco en hombros</Text>
                    <Text>Mas foco en pecho</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('CreateRoutine')} // Navega a CreateRoutine
            >
                <Text style={styles.addButtonText}>+ Nueva rutina</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    blackHeader: {
        backgroundColor: 'black',
        height: 50,
        width: '100%',  
    },
    title: {
        fontSize: 24,
        margin: 25,
        fontWeight: 'bold',
        marginBottom: 16,
    },
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
        backgroundColor: '#D9D9D9', // Color de fondo gris claro para imitar el placeholder de imagen
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
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 16,
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
