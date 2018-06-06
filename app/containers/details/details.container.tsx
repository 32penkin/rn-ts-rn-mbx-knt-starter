import React from 'react'
import { Component } from 'react';
import DetailsComponent from './details.component';

export default class DetailsContainer extends Component<any> {

  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <DetailsComponent
        person={params.person}
      />
    )
  }
}