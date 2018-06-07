import { peopleApi } from './people.api';
import { peopleStore } from '../../stores/people.store';
import Person from '../../models/models';

class PeopleService {

  getPeople(): Promise<Person[]> {
    return peopleApi.getPeople()
      .then(data => {
        peopleStore.setPeople(data);
        return data;
      });
  }

}

export const peopleService: PeopleService = new PeopleService();