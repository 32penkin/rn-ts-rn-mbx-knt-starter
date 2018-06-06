import { observable, action, computed } from 'mobx';
import { peopleStore } from '../../stores/people.store';
import { Person } from '../../models/models';

export class HomeVM {

  @observable loading: boolean = false;

  @action
  setLoading(value: boolean) {
    this.loading = value;
  }

  @computed
  get people(): Person[] {
    return peopleStore.people;
  }

}
