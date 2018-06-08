import { NetInfo } from 'react-native';
import { PeopleApi } from './people.api';
import { peopleStore } from '../../stores/people.store';
import Person from '../../models/models';
import { UserRepository } from '../../database/repositories/user.repository';

class PeopleService {

  repository: UserRepository;
  api: PeopleApi;

  constructor() {
    this.repository = new UserRepository();
    this.api = new PeopleApi();
  }

  getPeople(): Promise<Person[]> {


    // return this.repository.getAllUsers()
    //   .then(data => {
    //     peopleStore.setPeople(data);
    //     return data;
    //   });


    return this.api.getAllUsers()
      .then(data => {
        peopleStore.setPeople(data);
        return data;
      });
  }

  createUser(user: Person) {
    return this.repository.createUser(user);
  }

  getAllUsers() {
    return this.repository.getAllUsers();
  }

}

export const peopleService: PeopleService = new PeopleService();