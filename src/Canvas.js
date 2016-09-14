import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class GridElement extends Component {
  state = {
    color: "white"
  }

  onPressIn() {
    console.log(this.props);
    const { color } = this.props;
    this.setState({color});
  }

  render() {
    const { x, y, onPress } = this.props;
    const { color } = this.state;
    return (
      <TouchableWithoutFeedback onPressIn={this.onPressIn.bind(this)}>
        <View
          key={x*100 + y}
          style={[
              styles.gridElement,
              {left: x*24, top: y*24, backgroundColor: color}
          ]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default class Canvas extends Component {
  grid() {
    const { color } = this.props;
    let grid = [];

    for(let x=0; x<17; x++) {
      for(let y=0; y<27; y++) {
        grid.push(
          <GridElement x={x} y={y} color={color}/>
        );
      }
    }

    return grid;
  }

  render() {
    return (
      <View style={styles.canvas}>
        {this.grid()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gridElement: {
    position: "absolute",
    backgroundColor: "black",
    width: 24,
    height: 24,
  },

  canvas: {
    marginLeft: 2,
    marginTop: 8,
  },
});
