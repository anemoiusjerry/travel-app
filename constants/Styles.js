import { StyleSheet } from 'react-native';

const SharedStyles = StyleSheet.create({
    Shadow: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    menuWrapper: {
        marginTop: 10,
        textAlign: 'right'
    },
    menuItem: {
        flexDirection: 'row',
        padding: 10,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
    },
    menuItemText: {
        flex:1,
        textAlign: 'right',
        color: '#777777',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    }
});

export default SharedStyles;