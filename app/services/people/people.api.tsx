import { http } from '../../core/http/http';
import { Person } from '../../models/models';

export class PeopleApi {

  getAllUsers(): Promise<Person[]> {
    return http.get('/users')
      .then(res => {
        return res.data;
      });
  }

}