import { observable, action } from 'mobx';
import Person from '../models/models';

class PeopleStore {

  @observable people: Person[] = [];

  @action
  setPeople(people: Person[]) {
    this.people = people;
  }

}

export const peopleStore = new PeopleStore();