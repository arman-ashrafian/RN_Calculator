import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 3,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#3E606F'
    },

    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.75,
        borderColor: '#91AA9D'
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },

    displayText: {
        color: 'white',
        fontSize: 72,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    }
});

export default Style;