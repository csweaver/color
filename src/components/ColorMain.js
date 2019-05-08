import React, { Component } from "react";
import { connect } from "react-redux";
import ColorEl from "./ColorEl";
import { Card } from "semantic-ui-react";

@connect(state => {
  return { colors: state.colors };
})
class ColorMain extends Component {
  render() {
    const color_els = this.props.colors.colors.map(c => {
      return <ColorEl key={`color_el_${c}`} color={c} />;
    });
    return (
      <div>
        <Card.Group>{color_els}</Card.Group>
      </div>
    );
  }
}

export default ColorMain;
