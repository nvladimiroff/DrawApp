import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ColorElement = ({color, onPress, selected}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.color, {backgroundColor: color, borderColor: (selected == color ? "yellow" : "white") }]}/>
  </TouchableWithoutFeedback>
);

export default class ColorPicker extends Component {
  state = {
    selected: "white"
  }

  select(color) {
    this.setState({selected: color});
    console.log(this.props);
    this.props.onColorUpdate(color);
  }

  render() {
    return (
      <View style={styles.colorPicker}>
        <ColorElement selected={this.state.selected} color={"white"} onPress={() => this.select("white")}/>
        <ColorElement selected={this.state.selected} color={"black"} onPress={() => this.select("black")}/>
        <ColorElement selected={this.state.selected} color={"red"} onPress={() => this.select("red")}/>
        <ColorElement selected={this.state.selected} color={"green"} onPress={() => this.select("green")}/>
        <ColorElement selected={this.state.selected} color={"blue"} onPress={() => this.select("blue")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorPicker: {
    flex: 1,
    flexDirection: 'row',
  },

  color: {
    height: 100,
    flex: 0.2,
    borderWidth: 5,
  },
});
