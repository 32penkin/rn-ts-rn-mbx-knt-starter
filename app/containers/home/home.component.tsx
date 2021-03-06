import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import Person from '../../models/models';
import PersonComponent from '../../components/person';
import I18n from '../../core/locales/index';

interface HomeComponentProps {
  personClick: void;
  createUser: void;
  showUsers: void;
  people: Person[];
  loading: boolean;
}

export default class HomeComponent extends Component<HomeComponentProps> {

  constructor(props: HomeComponentProps) {
    super(props);
  }

  renderLoading() {
    return (
      <View>
        <Text style={styles.text}>Loading...</Text>
      </View>
    )
  }

  renderPerson(person: Person) {
    return (
      <TouchableHighlight key={person.name} onPress={(): void => this.props.personClick(person)} >
        <PersonComponent person={person} />
      </TouchableHighlight>
    );
  }

  renderPeople() {
    const {people} = this.props;
    if (people && people.length) {
      return people.map((person: Person) => this.renderPerson(person));
    }
  }

  renderCreate() {
    return (
      <RkButton
        style={styles.button}
        onPress={this.props.createUser}
      >
        Create User
      </RkButton>
    )
  }

  renderShow() {
    return (
      <RkButton
        style={styles.button}
        onPress={this.props.showUsers}
      >
        Show Users
      </RkButton>
    )
  }

  render() {
    const {loading} = this.props;
    return (
      <View style={styles.container}>
        {this.renderCreate()}
        {this.renderShow()}
        <Text>{I18n.t('HOME_TITLE')}</Text>
        {loading && this.renderLoading()}
        {!loading && this.renderPeople()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 21,
  },
  text: {
    color: 'blue',
  },
  button: {
    marginBottom: 14,
  }
});