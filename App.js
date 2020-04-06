import React from 'react'
import { View, Container } from 'react-native'
import MainApp from './MainApp'
import { render } from 'react-dom'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    'ProductSans-Regular': require('./assets/fonts/google-sans-cufonfonts/ProductSans-Regular.ttf'),
    'ProductSans-Italic': require('./assets/fonts/google-sans-cufonfonts/ProductSans-Italic.ttf'),
    'ProductSans-Bold': require('./assets/fonts/google-sans-cufonfonts/ProductSans-Bold.ttf'),
  })
}


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDataLoaded: false
    }
  }

  render() {
    if (!this.state.isDataLoaded) {
      return(
        <AppLoading startAsync={fetchFonts} onFinish={() => this.setState({isDataLoaded: true})}/>
      )
    } else {
      return <MainApp />;
    }
  }
}