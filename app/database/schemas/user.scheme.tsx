import * as Realm from 'realm';

export const UserSchema: Realm.ObjectSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    name: {type: 'string'},
    username: {type: 'string'},
    email: {type: 'string'},
  }
};