import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ProfileScreen from '../screens/Profilescreen';
import About from '../screens/About';
import Todo from '../screens/Todo';
import Announcements from '../screens/Announcements';
//import PrivacyPolicy from '../screens/PrivacyPolicy';
import leadingLadies  from '../screens/leadingLadies';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    ProfileScreen: {screen : ProfileScreen},
    About: {screen : About},
    Todo: { screen: Todo },
    Announcements:{screen:Announcements},
   // PrivacyPolicy:{screen : PrivacyPolicy}
    leadingLadies: {screen: leadingLadies}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthNavigation;