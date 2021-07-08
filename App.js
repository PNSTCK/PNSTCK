import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/screens/components/SearchBar';

const navigator = createStackNavigator ({
  search: SearchScreen,
  bar: SearchBar,

},{
  initialRouteName:'search',
  defaultNavigationOptions: {
   title:'barbruuh'
  }
});

export default createAppContainer(navigator)