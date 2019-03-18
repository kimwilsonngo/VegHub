import React from 'react';
import { createBottomTabNavigator, 
         createStackNavigator,
          createAppContainer} from 'react-navigation';
import { HomeScreen,
         CategoryScreen, 
         ProductScreen,  
         PlantsScreen,
         PlantsResultsScreen,
         BagScreen,
         CameraScreen } from './src/MyScreens';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class MyApp extends React.Component {
   render() {
      return(<App />);
   }
}

const HomeNavigator = createStackNavigator({
   Home: HomeScreen,
    Category: CategoryScreen,
     Product: ProductScreen
}, {
    //configuration options...
});

//USE THIS FOR THE GALLERY OF PLANTS
const PlantsNavigator = createStackNavigator({
      PlantsHome: PlantsScreen,
   PlantsResults: PlantsResultsScreen
}, {
    //configuration options...
});

const AppTabNavigator = createBottomTabNavigator({
   Home: HomeNavigator,
      Plants: PlantsNavigator,
      Camera: CameraScreen,
         Bag: BagScreen
   },{
   
     navigationOptions: ({ navigation }) => ({
        //define the icon for each tab here...
       tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      
      let icon;
      switch(routeName) {
         case 'Home':
            icon = `ios-search${focused ? '' : '-outline'}`;
            break;
         case 'Plants':
            icon = `ios-search${focused ? '' : '-outline'}`;
            break;
         case 'Bag':
            icon = `ios-appstore${focused ? '' : '-outline'}`;
            break;
         case 'Camera':
            break;
        }
        
        return <Ionicons
                 name={icon} 
                 size={25} 
                 color={tintColor} />;
       },
     }),
     tabBarOptions: {
       initialRouteName: 'Home',
       activeTintColor: '#fff',
       inactiveTintColor: '#ddd',
       style: {
         backgroundColor: '#4d535e',
      }
   }
});

//NECESSARY FOR REACT NATIVE 3
const App = createAppContainer(AppTabNavigator);

