import React, { Component } from "react";
import { connect } from "react-redux";
import ColorEl from "./ColorEl";

@connect(state => {
  return { colors: state.colors };
})
class ColorMain extends Component {
  render() {
    const color_els = this.props.colors.colors.map(c => {
      return (
        <ColorEl key={c} color={c}>
          c
        </ColorEl>
      );
    });
    return <div>{color_els}</div>;
  }
}

export default ColorMain;
