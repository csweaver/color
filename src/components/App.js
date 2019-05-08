import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ColorImp from "./ColorInput";
import { Container, Header, Divider } from "semantic-ui-react";
import ColorMain from "./ColorMain";
import ColorOutput from "./ColorOutput";
import { Footer } from "./Layout";

@connect(state => {
  return { colors: state.colors };
})
class App extends Component {
  render() {
    const display = this.props.colors.colors.length
      ? [<Divider />, <ColorMain />, <Divider />, <ColorOutput />]
      : "";
    return (
      <div id={"app"} className="App">
        <Container id={"main"} text textAlign="left">
          <Header as="h1" dividing color="purple">
            Color Shark
          </Header>
          <ColorImp />

          {display}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
