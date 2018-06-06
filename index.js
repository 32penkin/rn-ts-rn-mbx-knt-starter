import { AppRegistry, YellowBox } from 'react-native';
import App from './app/app';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('starter', () => App);