import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Motion, spring } from "react-motion";
import { FriendsRanking } from "./friendsRanking/FriendsRanking.js";
// In your render...

class App extends Component {
  render() {
    return (
      <div class="App">
        <FriendsRanking />
      </div>
    );
  }
}

export default App;
