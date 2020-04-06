import React, {Component} from 'react'
import Screen from './Screen'

export const HomeScreen = ({ navigation }) => <Screen navigation={navigation} name="Home"/>
export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile"/>
export const ActivityScreen = ({ navigation }) => <Screen navigation={navigation} name="Activity"/>
export const ReportScreen = ({ navigation }) => <Screen navigation={navigation} name="Report"/>
export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="List"/>
export const StatisticScreen = ({ navigation }) => <Screen navigation={navigation} name="Statistic"/>