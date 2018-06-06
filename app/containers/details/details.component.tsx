import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class DetailsComponent extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello From HomeComponent!</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  }
});