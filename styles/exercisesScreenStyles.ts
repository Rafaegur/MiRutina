import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
        borderRadius: 50,
    },
    textContainer: {
        flex: 1,
    },
    inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 8,
    },
    inputWrapper: {
        alignItems: 'center',
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

    // Estilos del modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginVertical: 4,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 8,
        marginBottom: 10,
        fontSize: 16,
    },
    placeholderImage: {
        width: 80,
        height: 80,
        marginBottom: 20,
        borderRadius: 40,
        backgroundColor: '#E0E0E0',
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalCloseButton: {
        marginTop: 10,
    },
    modalCloseButtonText: {
        color: '#EF4423',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
