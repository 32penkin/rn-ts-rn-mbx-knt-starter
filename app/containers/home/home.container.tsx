import React from 'react'
import { Component } from 'react';
import HomeComponent from './home.component';

type Props = {};
export default class HomeContainer extends Component<Props> {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  onDetails(): void {
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <HomeComponent
        onDetails={() => this.onDetails()}
      />
    )
  }
}