import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Person } from '../../models/models';

type Props = {
  person: Person;
};
export default class DetailsComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {person} = this.props;
    return (
      <View style={styles.container}>
        <Text>Name: {person.name}</Text>
        <Text>Gender: {person.gender}</Text>
        <Text>Height: {person.height}</Text>
        <Text>Mass: {person.mass}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  }
});