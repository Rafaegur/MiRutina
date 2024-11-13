import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles/seriesScreenStyles';

type Serie = {
    id: number;
    muscle: string;
    name: string;
    exercise: string;
    image: string;
};

export default function Series() {
    const [series, setSeries] = useState<Serie[]>([]);
    const { width } = Dimensions.get('window');

    // Estados para los valores de entrada
    const [peso, setPeso] = useState<number>(0);
    const [reps, setReps] = useState<number>(0);
    const [rir, setRIR] = useState<number>(0);

    // Función para guardar todos los valores de peso, reps y RIR
    const saveAllInputs = async () => {
        try {
            await AsyncStorage.setItem('@peso', peso.toString());
            await AsyncStorage.setItem('@reps', reps.toString());
            await AsyncStorage.setItem('@rir', rir.toString());
            Alert.alert('Datos guardados', 'Los valores de peso, reps y RIR se han guardado correctamente.');
        } catch (error) {
            console.error('Error al guardar los datos de entrada:', error);
        }
    };


    // Cargar series y datos de inputs desde AsyncStorage
    const loadSeries = async () => {
        try {
            const storedSeries = await AsyncStorage.getItem('@series');
            if (storedSeries) {
                setSeries(JSON.parse(storedSeries));
            }
            const storedPeso = await AsyncStorage.getItem('@peso');
            const storedReps = await AsyncStorage.getItem('@reps');
            const storedRIR = await AsyncStorage.getItem('@rir');
            if (storedPeso !== null) setPeso(parseInt(storedPeso, 10));
            if (storedReps !== null) setReps(parseInt(storedReps, 10));
            if (storedRIR !== null) setRIR(parseInt(storedRIR, 10));
        } catch (error) {
            console.error('Error al cargar series o datos:', error);
        }
    };

    // Función para guardar un valor en AsyncStorage
    const saveValue = async (key: string, value: number) => {
        try {
            await AsyncStorage.setItem(key, value.toString());
            Alert.alert('Datos guardados', `El valor de ${key.slice(1)} se ha guardado correctamente.`);
        } catch (error) {
            console.error(`Error al guardar ${key}:`, error);
        }
    };

    // Funciones para incrementar y decrementar los valores
    const incrementPeso = () => setPeso(prev => prev + 1);
    const decrementPeso = () => setPeso(prev => Math.max(0, prev - 1));

    const incrementReps = () => setReps(prev => prev + 1);
    const decrementReps = () => setReps(prev => Math.max(0, prev - 1));

    const incrementRIR = () => setRIR(prev => prev + 1);
    const decrementRIR = () => setRIR(prev => Math.max(0, prev - 1));

    // Cargar series y datos de inputs al montar el componente
    useEffect(() => {
        loadSeries();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Press de Banca</Text>

            {/* Gráfico */}
            <LineChart
                data={{
                    labels: ['Jan 1', 'Mar 14', 'May 5', 'Jun 8', 'Jul 16'],
                    datasets: [{ data: [100, 90, 95, 85, 88], strokeWidth: 2 }],
                }}
                width={width - 40}
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#f7f7f7',
                    backgroundGradientTo: '#f7f7f7',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                bezier
                style={styles.chart}
            />

            {/* Carrusel de series */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={300 + 10}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: (width - 300 - 25) / 2,
                }}
            >
                {series.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.muscle}>{item.muscle}</Text>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.exercise}>{item.exercise}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.rowContainer}>
                <View style={styles.inputWrapper}>
                    <Text>Peso</Text>
                    <View style={styles.incrementContainer}>
                        <TouchableOpacity onPress={decrementPeso} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.valueText}>{peso}</Text>
                        <TouchableOpacity onPress={incrementPeso} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text>Reps</Text>
                    <View style={styles.incrementContainer}>
                        <TouchableOpacity onPress={decrementReps} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.valueText}>{reps}</Text>
                        <TouchableOpacity onPress={incrementReps} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputWrapper}>
                    <Text>RIR</Text>
                    <View style={styles.incrementContainer}>
                        <TouchableOpacity onPress={decrementRIR} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.valueText}>{rir}</Text>
                        <TouchableOpacity onPress={incrementRIR} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={saveAllInputs}>
                <Text style={styles.saveButtonText}>Guardar todo</Text>
            </TouchableOpacity>

            {/* Botón de añadir grabación */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Añadir grabación</Text>
            </TouchableOpacity>

        </View>
    );
}

