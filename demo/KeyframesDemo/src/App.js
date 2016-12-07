import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
} from 'react-native'

import KeyframesView from 'react-native-facebook-keyframes'

export default class KeyframesDemo extends Component {

  state = {
    seek: null,
    paused: false,
  }

  keyframesLogo = require('./keyframes-logo.json')

  handleControlButtonPress = () => {
    this.setState({ paused: !this.state.paused })
  }

  handleSeekProgressValueChange = seek => {
    this.setState({ seek: seek / 10})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Faceobook Keyframes Demo!
        </Text>

        <KeyframesView
          seek={this.state.seek}
          paused={this.state.paused}
          style={styles.keyframesLogoView}
          src={this.keyframesLogo}
        />

        <TouchableOpacity onPress={this.handleControlButtonPress} style={styles.button}>
          <Text>{this.state.paused ? '> Start Video' : '|| Pause Video'}</Text>
        </TouchableOpacity>

        <Slider
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          onValueChange={this.handleSeekProgressValueChange}
        />
        <Text style={styles.seekText}>{this.state.seek}</Text>
      </View>
    )
  }
}
const defaultBackgroundColor = '#F5FCFF'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultBackgroundColor,
  },

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50,
  },

  keyframesLogoView: {
    width: 300,
    height: 300
  },

  button: {
    borderWidth: 1,
    padding: 10,
  },

  slider: {
    width: 300,
    margin: 20,
  },

  seekText: {
    height: 20,
  }
})
