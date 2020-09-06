import React from "react";
import Navbar from "./Navbar";
import List from "./List";

class App extends React.Component {
  render() {
    return (
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Navbar />
        <List />
      </div>
    );
  }
}

export default App;
