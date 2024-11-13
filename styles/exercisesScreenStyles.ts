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

