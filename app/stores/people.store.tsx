import { observable, action } from 'mobx';
import Person from '../models/models';

export default class PeopleStore {

  @observable people: Person[] = [];

  @action
  setPeople(people: Person[]) {
    this.people = people;
  }

}