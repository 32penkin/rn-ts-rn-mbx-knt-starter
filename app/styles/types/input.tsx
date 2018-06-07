import {RkTheme} from 'react-native-ui-kitten';
import {Platform} from 'react-native';

function bootstrap() {

  RkTheme.setType('RkTextInput', 'search', {
    input: {
      fontFamily: theme => theme.fonts.light,
      fontSize: 28,
      height: 35,
      paddingVertical: 0,
      marginVertical: 18,
      letterSpacing: -0.2,
      color: theme => theme.text.white,
      placeholderTextColor: theme => theme.text.inactive,
    },
    container: {
      backgroundColor: theme => theme.background.darkShaded,
      borderBottomWidth: 0,
      marginVertical: 0,
    },
    label: {
      lineHeight: Platform.OS === 'ios' ? 14 : 11,
      textAlignVertical: 'center'
    }
  });

  RkTheme.setType('RkTextInput', 'chat', {
    input: {
      fontFamily: theme => theme.fonts.regular,
      fontSize: 16,
      height: 21,
      lineHeight: 21,
      marginTop: 8,
      marginBottom: 3,
      paddingVertical: 0,
      marginLeft: 6,
      letterSpacing: 0.1,
      color: theme => theme.text.primary,
      placeholderTextColor: theme => theme.text.secondary,
    },
    container: {
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: theme => theme.border.base,
      marginVertical: 0,
    },
    label: {

    }
  });



}

export default bootstrap