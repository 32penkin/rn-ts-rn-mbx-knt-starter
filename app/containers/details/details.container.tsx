import React from 'react'
import { Component } from 'react';
import DetailsComponent from './details.component';

type Props = {};
export default class DetailsContainer extends Component<Props> {

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
    return (
      <DetailsComponent/>
    )
  }
}