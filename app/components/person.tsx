import React from 'react'
import { Component } from 'react';
import { Text } from 'react-native';
import { Person } from '../../models/models';

interface PersonComponentProps {
  person: Person;
}

export default class PersonComponent extends Component<PersonComponentProps> {

  constructor(props: PersonComponentProps) {
    super(props);
  }

  render() {
    return <Text style={{ padding: 20 }}>{this.props.person.name}</Text>;
  }

}