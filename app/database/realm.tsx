import Realm from 'realm';
import { UserSchema } from './schemas/user.scheme';

const realm: Realm = new Realm({schema: [UserSchema]});

export default realm;