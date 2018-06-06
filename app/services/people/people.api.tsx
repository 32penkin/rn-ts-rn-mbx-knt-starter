import { http } from '../../core/http/http';
import { Person } from '../../models/models';

class PeopleApi {

  getPeople(): Promise<Person[]> {
    return http.get('people')
      .then(res => res.data.results);
  }

}

export const peopleApi: PeopleApi = new PeopleApi();