import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { HomeScreen, ProfileScreen, ActivityScreen, ReportScreen, ListScreen, StatisticScreen } from './screens'
import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      drawerIcon: ({ tintColor }) => <Feather name="home" size={16} color={tintColor}/>
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
      drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  ActivityScreen: {
    screen: ActivityScreen,
    navigationOptions: {
      title: "Activity",
      drawerIcon: ({tintColor}) => <Feather name="activity" size={16} color={tintColor}/>
    }
  },
  ReportScreen: {
    screen: ReportScreen,
    navigationOptions: {
      title: "Report",
      drawerIcon: ({tintColor}) => <Feather name="clipboard" size={16} color={tintColor}/>
    }
  }, 
  ListScreen: {
    screen: ListScreen,
    navigationOptions: {
      title: "List",
      drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor}/>
    }
  },
  StatisticScreen: {
    screen: StatisticScreen,
    navigationOptions: {
      title: "Statistics",
      drawerIcon: ({tintColor}) => <Feather name="trending-up" size={16} color={tintColor}/>
    }
  }
},
{
  contentComponent: props => <SideBar {...props}/>,
  hideStatusBar: true,
  drawerWidth: 350,
})

export default createAppContainer(DrawerNavigator)