import React from "react";
import "./App.css";
import ColorImp from "./ColorInput";
import { Container, Header } from "semantic-ui-react";
import ColorMain from "./ColorMain";

function App() {
  return (
    <div id={"app"} className="App">
      <Container id={"main"} text textAlign="left">
        <Header as="h1" dividing color="purple">
          Color Shark
        </Header>
        <ColorImp />
        <ColorMain />
      </Container>
    </div>
  );
}

export default App;
