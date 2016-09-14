import React, { Component } from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';

import ColorPicker from './ColorPicker';
import Canvas from './Canvas';

export default class DrawApp extends Component {
  state = {
    color: "white"
  }

  render() {
    return (
      <View>
        <Canvas color={this.state.color}/>
        <ColorPicker onColorUpdate={color => this.setState({color}) }/>
      </View>
    );
  }
}

