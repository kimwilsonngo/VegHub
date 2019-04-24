import React, { Component } from 'react';

import {  StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';

import {Alert, AppRegistry, Platform, TouchableOpacity} from 'react-native';

export class PlantsResultsTest extends Component {
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data', 'NO-ID');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Your Plant is: {JSON.stringify(data)}</Text>

            </View>
        );
    }
}