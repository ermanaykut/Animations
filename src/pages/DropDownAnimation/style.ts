import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.aqua,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor:colors.grey,
    shadowOpacity:.6,
  },
  text:{
    fontSize:20,
    fontWeight:'600',
    position: 'absolute',
    bottom:25,
    borderColor:colors.lightgrey,
    borderWidth:2,
    backgroundColor: colors.aqua,
    padding:10,
    shadowColor:colors.grey,
    shadowOpacity:.6,





  },
});

export default styles;
