import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import ProfileScreen from '../screens/Profilescreen';
import About from '../screens/About';
import Todo from '../screens/Todo';
import Announcements from '../screens/Announcements';
import leadingLadies  from '../screens/leadingLadies';
import Reminder from '../screens/Reminder';

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    ProfileScreen: {screen : ProfileScreen},
    About: {screen : About},
    Todo: { screen: Todo },
    Announcements:{screen: Announcements},
    Reminder: {screen: Reminder},
    leadingLadies: {screen: leadingLadies}
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation