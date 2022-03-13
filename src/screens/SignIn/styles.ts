import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        paddingHorizontal: 50,
        marginTop: -40
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
    }
});