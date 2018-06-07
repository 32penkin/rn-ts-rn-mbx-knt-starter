import React from 'react'
import { Component } from 'react';
import { bootstrap } from './styles/types';
import { Navigator } from './core/navigation/routes';

declare module 'react-native-ui-kitten';

bootstrap();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Navigator />;
  }
}
