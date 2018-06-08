import * as Realm from 'realm';

export class RealmHelper {

  convertToJson(realmObj: Realm.RealmObject) {
    return JSON.parse(JSON.stringify(realmObj));
  }

}