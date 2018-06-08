import realm from '../realm';
import _ from 'lodash';
import Person from '../../models/models';
import { RealmHelper } from '../realmHelper';

export class UserRepository {

  realmHelper: RealmHelper;

  constructor() {
    this.realmHelper = new RealmHelper();
  }

  createUser(user: Person) {
    realm.write(() => {
      realm.create('User', user);
    })
  }

  getAllUsers(): Promise<Person[]> {
    return new Promise((resolve, reject) => {
      realm.write(() => {
        const users = realm.objects('User');
        if (users) {
          resolve(this.realmHelper.convertToJson(_.values(users)));
        } else {
          reject(false);
        }
      })
    });
  }
}