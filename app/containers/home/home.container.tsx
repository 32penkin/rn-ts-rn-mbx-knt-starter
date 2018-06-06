import React from 'react'
import { Component } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import HomeComponent from './home.component';

interface HomeContainerProps {
  navigation: NavigationScreenProp<NavigationState>,
}

export default class HomeContainer extends Component<HomeContainerProps> {

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