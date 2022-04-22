import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ProfileScreen from '../screens/Profilescreen';
import About from '../screens/About';
import Todo from '../screens/Todo';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    ProfileScreen: {screen : ProfileScreen},
    About: {screen : About},
    Todo: { screen: Todo }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthNavigation;