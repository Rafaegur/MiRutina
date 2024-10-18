import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Series() {
    const [series, setSeries] = useState([
        {
            id: 1,
            muscle: 'Pectorales',
            name: 'Serie 1',
            exercise: 'Press de banca',
            image: 'https://www.dhzfitness.com/uploads/pectoralis-major.jpg',
        },
        {
            id: 2,
            muscle: 'Pectorales',
            name: 'Serie 2',
            exercise: 'Press de banca',
            image: 'https://www.dhzfitness.com/uploads/pectoralis-major.jpg',
        },
        {
            id: 3,
            muscle: 'Pectorales',
            name: 'Serie 3',
            exercise: 'Press de banca',
            image: 'https://www.dhzfitness.com/uploads/pectoralis-major.jpg',
        },
    ]);

    const { width } = Dimensions.get('window');
    const cardWidth = 300;
    const cardMargin = 10;

    // Datos del gráfico
    const data = {
        labels: ['Jan 1', 'Mar 14', 'May 5', 'Jun 8', 'Jul 16'],
        datasets: [
            {
                data: [100, 90, 95, 85, 88],
                strokeWidth: 2,
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Press de Banca</Text>

            {/* Gráfico embellecido */}
            <LineChart
                data={data}
                width={width - 40} // ancho ajustado
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#f7f7f7',
                    backgroundGradientTo: '#f7f7f7',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // líneas azules
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726',
                    },
                    propsForBackgroundLines: {
                        strokeDasharray: '', // quita las líneas discontinuas
                        stroke: '#e3e3e3',
                    },
                }}
                bezier // para suavizar la curva
                style={styles.chart}
            />

            {/* Carrusel de series */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={cardWidth + cardMargin}
                decelerationRate="fast"
                contentContainerStyle={{
                    paddingHorizontal: (width - cardWidth - 25 ) / 2,
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

            {/* Inputs de peso, reps, RIR */}
            <View style={styles.inputsContainer}>
                <View style={styles.inputWrapper}>
                    <Text>Peso</Text>
                    <TextInput style={styles.input} keyboardType="numeric" defaultValue="0" />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Reps</Text>
                    <TextInput style={styles.input} keyboardType="numeric" defaultValue="0" />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>RIR</Text>
                    <TextInput style={styles.input} keyboardType="numeric" defaultValue="0" />
                </View>
            </View>

            {/* Botón para añadir grabación */}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Añadir grabación</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    chart: {
        marginVertical: 8,
        borderRadius: 16,
    },
    card: {
        backgroundColor: '#E0E0E0',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 10,
        height: 120,
        width: 300,
        marginHorizontal: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
        borderRadius: 100,
    },
    textContainer: {
        flex: 1,
    },
    inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8, // reducir margen vertical para acercar inputs a las tarjetas
    },
    inputWrapper: {
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        width: 60,
        textAlign: 'center',
        height: 40,
        marginTop: 4,
    },
    addButton: {
        marginTop: 16,
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


