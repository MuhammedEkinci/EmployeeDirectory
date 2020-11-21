import React from "react";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import Container from "./components/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {


    return (
      <div>
        <Router>
          <Header />
          <Container>
          <Employees></Employees>
          </Container>
        </Router>
      </div>

    );
}

export default App;

