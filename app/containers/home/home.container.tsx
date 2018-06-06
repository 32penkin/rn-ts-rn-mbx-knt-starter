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
    this.vm = new HomeVM();
  }

  componentWillMount() {
    this.vm.setLoading(true);
    peopleService.getPeople()
      .finally(() => this.vm.setLoading(false));
  }

  onPersonClick(person: Person): void {
    this.props.navigation.navigate('Details', {person: person});
  }

  render() {
    return (
      <HomeComponent
        personClick={(person) => this.onPersonClick(person)}
        people={this.vm.people}
        loading={this.vm.loading}
      />
    )
  }
}