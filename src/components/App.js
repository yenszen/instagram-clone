import React from "react";
import Navbar from "./Navbar";
import List from "./List";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <List />
      </div>
    );
  }
}

export default App;
