import React, { Component } from 'react';

//Weather module
import { FlatList } from 'react-native';
import ForecastCard from './components/ForecastCard';
import { API_KEY } from './utils/WeatherAPIKey';

import { Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DeviceWidth = Dimensions.get('window').width
const scaleVal = 0.4

export class BagScreen extends Component {
  constructor(props){
  		super(props);

  		this.state = {
  			latitude: 0,
  			longitude: 0,
        temperature: 0,
        weatherCondition: null,
  			forecast: [],
  			error:''
  		};
  	}

  	componentDidMount(){
  		// Get the user's location
  		this.getLocation();
  	}

  	getLocation(){

  		// Get the current position of the user
  		navigator.geolocation.getCurrentPosition(
  			(position) => {
  				this.setState(
  					(prevState) => ({
  					latitude: position.coords.latitude,
  					longitude: position.coords.longitude
  					}), () => { this.getWeather(); }
  				);
  			},
  			(error) => this.setState({ forecast: error.message }),
  			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  		);
  	}

  	getWeather(){

  		// Construct the API url to call
  		let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + `&units=imperial&appid=${API_KEY}`;


  		// Call the API, and set the state of the weather forecast
  		fetch(url)
  		.then(response => response.json())
  		.then(data => {
  			this.setState((prevState, props) => ({
  				forecast: data
  			}));
  		})
  	}

  	render() {
  		return (
  			<FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
  		);
  	}
}

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 36
        }}>
          <View style={{
            flexDirection: 'row',
            backgroundColor: "grey"}}>
            <View>
              <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'powderblue'}}>
                <Text> CAMTONO BEAN </Text>
                <Icon name = "rocket" size = {DeviceWidth*scaleVal} color="#900" />
              </View>
              <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'skyblue'}} />
            </View>
            <View>
              <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
              <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
            </View>
          </View>
        </View>
    );
  }
}

export class CategoryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world CATEGORY SCREEN</Text>
      </View>
    );
  }
}

export class ProductScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world PRODUCT</Text>
      </View>
    );
  }
}

export class PlantsResultsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world SESARCH RESULTS</Text>
      </View>
    );
  }
}

export class PlantsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world PLANTS</Text>
      </View>
    );
  }
}

export class CameraScreen extends Component {
    render() {
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello world CAMERA</Text>
          </View>
        );
      }
}