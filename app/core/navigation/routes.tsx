import { createStackNavigator, NavigationContainer } from 'react-navigation';
import HomeContainer from '../../containers/home/home.container';
import DetailsContainer from '../../containers/details/details.container';

export const Navigator: NavigationContainer = createStackNavigator({
  Home: {
    screen: HomeContainer,
  },
  Details: {
    screen: DetailsContainer,
  },
}, {
    initialRouteName: 'Home',
  }
);