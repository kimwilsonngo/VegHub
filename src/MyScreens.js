import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

const DeviceWidth = Dimensions.get('window').width
const scaleVal = 0.4

export class BagScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello world BAG</Text>
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
              <View style={{width: DeviceWidth*scaleVal, height: DeviceWidth*scaleVal, marginBottom:1, backgroundColor: 'powderblue'}} />
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