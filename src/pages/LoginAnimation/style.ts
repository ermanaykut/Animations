import {StyleSheet} from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.lemon,
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center',
      },
      input: {
        width: '100%',
        borderWidth: 0.6,
        borderRadius: 10,
        padding:15,
        fontSize:16,

      },
      inputContainer: {
        width: 300,
        height: 45,
        marginBottom: 20,
        paddingHorizontal: 15,

      },
      buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
      },
      button: {
        backgroundColor: colors.dodgerblue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
    
});

export default styles;
