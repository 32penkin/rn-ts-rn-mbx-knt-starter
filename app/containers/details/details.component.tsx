import React from 'react'
import { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {RkButton, RkStyleSheet} from 'react-native-ui-kitten';
import Person from '../../models/models';

type Props = {
  person: Person;
};
export default class DetailsComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  renderButton() {
    return (
      <View>
        <RkButton>Click me!</RkButton>
      </View>
    )
  }

  render() {
    const {person} = this.props;
    return (
      <View style={styles.container}>
        <Text>Name: {person.name}</Text>
        <Text>Username: {person.username}</Text>
        <Text>Email: {person.email}</Text>
        {this.renderButton()}
      </View>
    );
  }

}

const styles = RkStyleSheet.create((theme: any) => theme.mergeTabletStyles({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: theme.colors.danger,
  },
}, {
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: theme.colors.success,
  },
}, true));
