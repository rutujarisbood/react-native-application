import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ProfileScreen from '../screens/Profilescreen';
import About from '../screens/About';
import Announcements from '../screens/Announcements';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    ProfileScreen: {screen : ProfileScreen},
    About: {screen : About},
    Announcements: {screen : Announcements}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthNavigation;