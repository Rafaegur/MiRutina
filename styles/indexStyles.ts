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
        marginTop: 20, // Separación de los otros elementos
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
        marginTop: 10,  // Muy poco margen superior para que esté pegado a la tarjeta
    },
    deleteButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default styles;
