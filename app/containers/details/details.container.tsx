import React from 'react'
import { Component } from 'react';
import DetailsComponent from './details.component';

type Props = {};
export default class DetailsContainer extends Component<Props> {
  render() {
    return (
      <DetailsComponent/>
    )
  }
}