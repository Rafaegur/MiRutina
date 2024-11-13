// HomeScreen.styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        margin: 25,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        padding: 16,
        marginTop: 20,
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 10,
    },
    deleteButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    // Estilos del modal para crear nueva rutina
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalCloseButton: {
        marginTop: 10,
    },
    modalCloseButtonText: {
        color: '#EF4423',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
});

export default styles;
