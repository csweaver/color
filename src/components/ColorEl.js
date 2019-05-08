import React, { Component } from "react";
import "./ColorEl.css";
import { Card } from "semantic-ui-react";

class ColorEl extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <div className="ColorEl">
            <div
              style={{ backgroundColor: this.props.color }}
              className="Swatch"
            />
            <div className="Content">{this.props.color}</div>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default ColorEl;
