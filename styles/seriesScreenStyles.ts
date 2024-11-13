import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Contenedor principal
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    chart: {
        marginBottom: 20,
    },

    // Estilos del carrusel
    carouselContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    card: {
        width: 200, // Ajuste de ancho reducido
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    image: {
        width: '100%',
        height: 100, // Tamaño reducido de imagen
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        padding: 10,
    },
    muscle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
    },
    exercise: {
        fontSize: 12,
        color: '#777',
    },

    // Controles de entrada (peso, reps, RIR)
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    inputWrapper: {
        alignItems: 'center',
    },
    incrementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 15,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    valueText: {
        fontSize: 16,
        marginHorizontal: 10,
    },

    // Botones de acciones
    saveButton: {
        marginTop: 10,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
        alignSelf: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#EF4423',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 15,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default styles;
