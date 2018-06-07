import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

const AppbarHeight: number = DeviceInfo.isTablet() ? 42 : 36;
const StatusbarHeight: number = Platform.OS === 'ios' ? 0 : 20;
const HeaderHeight: number = AppbarHeight + StatusbarHeight;
const VisibleArea: number = HeaderHeight + 49;
const HitSlop: object = {top: 20, bottom: 20, left: 20, right: 20};

export default {
  AppbarHeight,
  StatusbarHeight,
  HeaderHeight,
  VisibleArea,
  HitSlop,
}