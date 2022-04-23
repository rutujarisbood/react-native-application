import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import ProfileScreen from '../screens/Profilescreen';
import About from '../screens/About';
import Todo from '../screens/Todo';
import Announcements from '../screens/Announcements';
import leadingLadies  from '../screens/leadingLadies';

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    ProfileScreen: {screen : ProfileScreen},
    About: {screen : About},
    Todo: { screen: Todo },
    Announcements:{screen: Announcements},
    leadingLadies: {screen: leadingLadies}
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation