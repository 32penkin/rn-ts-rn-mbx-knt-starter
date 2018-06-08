import { http } from '../../core/http/http';
import { Person } from '../../models/models';

class PeopleApi {

  getPeople(): Promise<Person[]> {
    return http.get('/users')
      .then(res => {
        return res.data;
      });
  }

}

export const peopleApi: PeopleApi = new PeopleApi();