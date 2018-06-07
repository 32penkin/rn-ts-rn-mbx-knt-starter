import {Colors} from './colors';
import {Fonts} from './fonts';
import {scale, scaleVertical, scaleModerate, guidelineBaseWidth, tabletBaseWidth} from '../core/utils/scale';
// import DeviceInfo from 'react-native-device-info';
import _ from 'lodash'
import {RkTheme} from 'react-native-ui-kitten';


const isTablet: boolean = false;
// const isIPhoneX: boolean = DeviceInfo.getModel() === 'iPhone X';

export const LightTheme: object = Object.freeze({
  colors: {
    primary: Colors.PRIMARY,
    danger: Colors.SECONDARY_RED,
    dangerAccent: Colors.SECONDARY_RED_ACCENT,
    info: Colors.SECONDARY_BLUE,
    success: Colors.SECONDARY_GREEN,
    successAccent: Colors.CHAT_ACCENT,
    off: Colors.OFF_WHITE,
    shadow: Colors.SHADOW
  },

  text: {
    primary: Colors.DARK_GREY,
    secondary: Colors.TEXT_SECONDARY,
    inactive: Colors.LIGHT_GREY,
    inactiveDark: Colors.DARK_MID_GREY,
    orange: Colors.PRIMARY,
    darkOrange: Colors.PRIMARY_SHADED,
    white: Colors.WHITE,
    header: Colors.WHITE,
    success: Colors.SECONDARY_GREEN,
    info: Colors.SECONDARY_BLUE,
    error: Colors.SECONDARY_RED,
    chatAccent: Colors.CHAT_ACCENT,
    hint: Colors.HINT_GREY,
    placeholder: Colors.PLACEHOLDER_GREY,
    frozen: Colors.FROZEN_BLUE,
    black: Colors.BLACK,
  },

  Fonts,

    background: {
      tabBar: Colors.WHITE,
      content: Colors.WHITE,
      dark: Colors.DARK_GREY,
      darkShaded: Colors.DARK_GREY_SHADED,
      secondary: Colors.LIGHT_GREY,
      primary: Colors.PRIMARY,
      shaded: Colors.PRIMARY_SHADED,
      chatAccent: Colors.PRIMARY,
      off: Colors.OFF_WHITE,
      shadowOpacity: Colors.SHADOW_OPACITY,
      blurContent: Colors.HEADER_BORDER,
      secondaryShaded: Colors.TEXT_SECONDARY,
      error: Colors.SECONDARY_RED,
      danderShaded: Colors.SECONDARY_RED_SHADED,
      tooltip: Colors.PLACEHOLDER_GREY,
    },

  border: {
    base: Colors.DARK_GREY,
    header: Colors.HEADER_BORDER,
    shade: Colors.OFF_WHITE,
    success: Colors.SECONDARY_GREEN,
    info: Colors.SECONDARY_BLUE,
    error: Colors.SECONDARY_RED,
    light: Colors.WHITE,
    darkInverse: Colors.DARK_MID_GREY,
    lightGrey: Colors.LIGHT_GREY,

  },

  mergeTabletStyles: (phoneStyles: any, tabletStyles: any, override: boolean = false) => {
    let mergeFunc = override ? Object.assign : _.merge;
    return isTablet ? mergeFunc(phoneStyles, tabletStyles) : phoneStyles
  },

  isTablet,
  // isIPhoneX,
  deviceStyle: (phoneStyle: any, tabletsStyle: any) => isTablet ? tabletsStyle : phoneStyle,
  scaleOnlyPhone: (x: number) => isTablet ? x : scale(x),
  scaleVerticalOnlyPhone: (x: number) => isTablet ? x : scaleVertical(x),
  scaleModerateOnlyPhone: (x: number, y: number) => isTablet ? x : scaleModerate(x, y),
  scale, scaleVertical, scaleModerate, guidelineBaseWidth, tabletBaseWidth,
});
