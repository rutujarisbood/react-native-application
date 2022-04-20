import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import Todo from '../screens/Todo';


const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    ForgotPassword: { screen: ForgotPassword },
    Todo: { screen: Todo }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AuthNavigation;