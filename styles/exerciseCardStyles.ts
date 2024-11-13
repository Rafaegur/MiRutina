
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    deleteButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ff5252',
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;
