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
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;
