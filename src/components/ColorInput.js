import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, TextArea, Form } from "semantic-ui-react";
import { inputColors } from "../actions";
@connect(state => {
  return { colors: state.colors };
})
class ColorImp extends Component {
  state = { colorArea: [] };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { colorArea } = this.state;

    dispatch(inputColors(["#00aaff", "#333333"]));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Colors to parse</label>
            <TextArea onChange={this.handleChange} name="colorArea" />
          </Form.Field>
          <Form.Field>
            <Button type="submit">Submit</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default ColorImp;
