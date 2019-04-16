import React, { Component } from 'react';

//Weather module
import {  StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
//import ForecastCard from './components/ForecastCard';
//import { API_KEY } from './utils/WeatherAPIKey';

import { FlatGrid } from 'react-native-super-grid';

import Icon from 'react-native-vector-icons/FontAwesome';

const DeviceWidth = Dimensions.get('window').width
const scaleVal = 0.4

export class BagScreen extends Component {
  render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello world BAG SCREEN </Text>
        </View>
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
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          )}
        />
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
