import React, { Component } from "react";
import "./ColorEl.css";

class ColorEl extends Component {
  render() {
    return (
      <div className="ColorEl">
        <div style={{ backgroundColor: this.props.color }} className="Swatch" />
        <div className="Content">{this.props.color}</div>
      </div>
    );
  }
}

export default ColorEl;
