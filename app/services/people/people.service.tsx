import { peopleApi } from './people.api';
import { peopleStore } from '../../stores/people.store';

class PeopleService {

  getPeople() {
    return peopleApi.getPeople()
      .then(data => {
        peopleStore.setPeople(data);
        return data;
      });
  }

}

export const peopleService: PeopleService = new PeopleService();