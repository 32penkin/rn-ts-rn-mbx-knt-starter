import React from 'react-native';
import {Dimensions} from 'react-native';

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

const scale = size => width / guidelineBaseWidth * size;
const scaleVertical = size => height / guidelineBaseHeight * size;
const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;
const tabletBaseWidth = guidelineBaseWidth + scaleVertical(21);

export {scale, scaleVertical, scaleModerate, guidelineBaseWidth, tabletBaseWidth};