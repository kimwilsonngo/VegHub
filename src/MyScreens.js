import React, { Component } from 'react';

//Weather module
import {  StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
//import ForecastCard from './components/ForecastCard';
//import { API_KEY } from './utils/WeatherAPIKey';

import {Alert, AppRegistry, Platform, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PlantsResultsScreen } from './PlantsResultsScreen';
const DeviceWidth = Dimensions.get('window').width
const scaleVal = 0.4

export class HomeScreen extends Component {

    handleClick = (data) => {
        this.props.navigation.navigate(data);
    }

    static navigationOptions = {
        headerStyle:{
            backgroundColor: 'transparent',
            zIndex: 100,
        },
    };

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 15
        }}>
        <View style={{
        flexDirection: 'row',
        backgroundColor: "white"}}>
            <View>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'powderblue'}}>
                    <Text> CAMTONO BEAN </Text>
                    <Icon name = "rocket" size = {DeviceWidth*scaleVal} color="#900" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClick("Plants")}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'skyblue'}}>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'powderblue'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.handleClick('Camera')}>
                    <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, marginLeft:1, backgroundColor: 'skyblue'}} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}

export class PlantsScreen extends Component {

    //When uses presses a plant, navigates them to each plant's result screen
    handleClick = (data) => {
        this.props.navigation.navigate('PlantsResults', {data});
        //this.props.navigation.navigate('Home');
    }

    render() {
        //Need MongoDB Query to get this shit
        //List of JSON Objects
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
        ];

        return (
            <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (

            <TouchableOpacity onPress={() => this.handleClick(item.name)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
                </View>
            </TouchableOpacity>

            )}
            />
        );
    }
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
