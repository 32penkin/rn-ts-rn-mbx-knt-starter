import React from 'react'
import { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

interface HomeComponentProps {
  onDetails: void,
}

export default class HomeComponent extends Component<HomeComponentProps> {

  constructor(props: HomeComponentProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello From HomeComponent!</Text>
        <Button title={'To Details'} onPress={this.props.onDetails}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  }
});