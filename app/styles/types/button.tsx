import {RkTheme} from 'react-native-ui-kitten';

function bootstrap() {

  RkTheme.setType('RkButton', 'icon', {
    backgroundColor: 'transparent',
    width: null,
    height: null,
    container: {
      paddingVertical: 0,
      paddingHorizontal: 0,
    }
  });

  RkTheme.setType('RkButton', 'help', {
    backgroundColor: 'transparent',
    width: null,
    height:null,
    fontSize: 15,
    color: theme => theme.text.orange,
    content:{
      letterSpacing: 0.3,
    }
  })
}

export default bootstrap;