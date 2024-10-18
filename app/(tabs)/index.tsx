// HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RoutineCard from '../../components/RoutineCard'; // Importa el nuevo componente
import styles from './index.styles'; // Importa los estilos

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis rutinas</Text>

            {/* Usamos el componente RoutineCard */}
            <RoutineCard
                imageUri="https://static.vecteezy.com/system/resources/previews/017/064/096/non_2x/weight-gym-icon-free-vector.jpg"
                title="Rutina Octubre-Nov"
                subtitle="Cuarta rutina"
                description={['Más foco en hombros', 'Más foco en pecho']}
                onPress={() => navigation.navigate('exercises')}
            />

            {/* Botón para agregar una nueva rutina */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Nueva rutina</Text>
            </TouchableOpacity>
        </View>
    );
}