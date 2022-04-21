import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ProfileScreen from '../screens/Profilescreen';
import Announcements from '../screens/Announcements';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    ProfileScreen: {screen : ProfileScreen},
    Announcements: {screen : Announcements}
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthNavigation;