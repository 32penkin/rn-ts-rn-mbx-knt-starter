import React from 'react'
import { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {observer} from 'mobx';
import { Person } from '../../models/models';
import PersonComponent from '../../components/person';

interface HomeComponentProps {
  personClick
    : void;
  people: Person[];
  loading: boolean;
}

@observer
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
      <TouchableHighlight key={person.name} onPress={() => this.props.personClick(person)} >
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

  render() {
    const {loading} = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello From HomeComponent!</Text>
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
  }
});