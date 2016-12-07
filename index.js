import React, {Component, PropTypes} from 'react'
import { View, requireNativeComponent } from 'react-native'

export default class KeyframesView extends Component {
  render() {
    return (
      <RNKeyframesView {...this.props} />
    )
  }
}

KeyframesView.propTypes = {
  src: PropTypes.object,
  seek: PropTypes.number,
  paused: PropTypes.bool,
  ...View.propTypes,
}

const RNKeyframesView = requireNativeComponent('RNKeyframesView', KeyframesView)