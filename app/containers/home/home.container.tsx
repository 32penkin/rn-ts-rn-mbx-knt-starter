import React from 'react'
import { Component } from 'react';
import HomeComponent from './home.component';

type Props = {};
export default class HomeContainer extends Component<Props> {
  render() {
    return (
      <HomeComponent
        onDetails={() => this.props.navigation.navigate('Details')}
      />
    )
  }
}