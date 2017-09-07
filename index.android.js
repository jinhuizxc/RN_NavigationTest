/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import MainVC from './app/MainVC';
import FindVC from './app/FindVC';
import ReleaseVC from './app/ReleaseVC';
import NewsVC from './app/NewsVC';
import MineVC from './app/MineVC';
import DetailVC from './app/DetailVC';
// 通过TabNavigator做路由映射

const MainScreentNavigator = TabNavigator({
    MainVC: {screen: MainVC},
    FindVC: {screen: FindVC},
    ReleaseVC: {screen: ReleaseVC},
    NewsVC: {screen: NewsVC},
    MineVC: {screen: MineVC},
});
//引入要用到的跳转页面
const RN_NavigationTest = StackNavigator({
    Main: {screen: MainScreentNavigator},
    DetailVC: {screen: DetailVC},
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});


AppRegistry.registerComponent('RN_NavigationTest', () => RN_NavigationTest);
