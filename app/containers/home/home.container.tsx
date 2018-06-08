import React from 'react'
import { Component } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import {observer} from 'mobx-react';
import HomeComponent from './home.component';
import { HomeVM } from './home.vm';
import { peopleService } from '../../services/people/people.service';
import Person from '../../models/models';

interface HomeContainerProps {
  navigation: NavigationScreenProp<NavigationState>;
  vm: HomeVM;
}

@observer
export default class HomeContainer extends Component<HomeContainerProps> {

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props: HomeContainerProps) {
    super(props);
  }

  vm: HomeVM = new HomeVM();

  componentWillMount() {
    this.vm.setLoading(true);
    peopleService.getPeople()
      .finally(() => this.vm.setLoading(false));
  }

  onPersonClick(person: Person): void {
    this.props.navigation.navigate('Details', {person: person});
  }

  onCreateUser() {
    const user = {
      id: Math.floor((Math.random() * 100) + 1),
      name: Math.random().toString(36).substring(7),
      username: Math.random().toString(36).substring(7),
      email: Math.random().toString(36).substring(7),
    };
    peopleService.createUser(user);
  }

  onShowUsers() {
    peopleService.getAllUsers()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <HomeComponent
        personClick={(person: Person): void => this.onPersonClick(person)}
        people={this.vm.people}
        loading={this.vm.loading}
        createUser={() => this.onCreateUser()}
        showUsers={() => this.onShowUsers()}
      />
    )
  }
}