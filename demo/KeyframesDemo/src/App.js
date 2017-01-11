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
    paused: true,
  }

  keyframesLogo = require('./keyframes-logo.json')

  handleStartButtonPress = () => {
    this.setState({ seek: 0.0 }, () => this.setState( { paused: false }))
  }

  handlePauseButtonPress = () => {
    this.setState({ paused: true })
  }

  handleResumeButtonPress = () => {
    this.setState({ paused: false })
  }

  handleSeekProgressValueChange = seek => {
    this.setState({ seek: seek / 100 })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Keyframes Demo!
        </Text>

        <KeyframesView
          seek={this.state.seek}
          paused={this.state.paused}
          style={styles.keyframesLogoView}
          src={this.keyframesLogo}
        />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.handleStartButtonPress} style={styles.button}>
            <Text>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePauseButtonPress} style={styles.button}>
            <Text>Pause</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleResumeButtonPress} style={styles.button}>
            <Text>Resume</Text>
          </TouchableOpacity>
        </View>

        <Slider
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={99}
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: defaultBackgroundColor,
  },

  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
  },

  keyframesLogoView: {
    width: 200,
    height: 200
  },

  buttonsContainer: {
    flexDirection: 'row'
  },

  button: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 5,
  },

  slider: {
    width: 300,
    margin: 20,
  },

  seekText: {
    height: 20,
  }
})
