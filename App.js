import React, {Component} from 'react';

import {
AppRegistry,
View }
from 'react-native';

import {
createBottomTabNavigator,
createStackNavigator,
createAppContainer, } from 'react-navigation';

import {
HomeScreen,
PlantsScreen,
BagScreen,
CameraScreen, } from './src/MyScreens';

import {PlantsResultsScreen} from './src/PlantsResultsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
        }
    }
);

const PlantStack = createStackNavigator({
        Plants: PlantsScreen,
        PlantsResults: PlantsResultsScreen,
    },
    {
    }
);

const CameraStack = createStackNavigator({
        Camera: CameraScreen
        },
        {
        }
);

const ProfileStack = createStackNavigator({
        Profile: BagScreen
        },
        {
        }
);

const BottomTabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Plants: PlantStack,
   // Camera: CameraStack,
    Profile: ProfileStack

    },{
        navigationOptions: ({ navigation }) => ({

        //define the icon for each tab here...
        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
    },
    }),
        tabBarOptions: {
            initialRouteName: 'Plants',
            style: {
                backgroundColor: 'blue',
            }
    }
});

const AppStack = createStackNavigator({
    Main: BottomTabNavigator
    },
    {
        headerMode: 'none', //removes the dumb first header
        navigationOptions:  ({ navigation }) => {

                let headerOption = {};
                if (navigation.state.routeName === 'Home') {
                    headerOption.header = null;
                }
                return {
                    headerVisible: false, //removes the dumb first header
                }
            }
    })

export default class Main extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      route: {
        name: 'Home',
        passProps:{
          notification: props.notification
        }
      }
    };
  }
  render() {
    return (
        <App/>
    );
  }
}
AppRegistry.registerComponent('ineguapp', () => Main);
//NECESSARY FOR REACT NATIVE 3
const App = createAppContainer(AppStack);

