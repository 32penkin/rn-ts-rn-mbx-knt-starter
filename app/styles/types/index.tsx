import initTexts from './text'
import initInputs from './input'
import initButtons from './button'
import {RkTheme} from 'react-native-ui-kitten';
import {LightTheme} from '../lightTheme';

const init = () => {
  RkTheme.setTheme(LightTheme, null);
  // initTexts();
  // initInputs();
  // initButtons();
};

init();

export const bootstrap = () => {};


