import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Header } from "semantic-ui-react";
import "./ColorOutput.css";

@connect(state => {
  return { colors: state.colors };
})
class ColorOutput extends Component {
  render() {
    const color_els = this.props.colors.colors.map(c => {
      return <List.Item>{c}</List.Item>;
    });
    return (
      <div>
        <Header as="h3">Export</Header>
        <div className="ColorOutput">
          <List>{color_els}</List>
        </div>
      </div>
    );
  }
}

export default ColorOutput;
