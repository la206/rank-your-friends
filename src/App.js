import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Motion, spring } from "react-motion";
import { FriendsRanking } from "./friendsRanking/FriendsRanking.js";
// In your render...

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RANK YOUR FRIENDS</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <FriendsRanking />
        </header>
      </div>
    );
  }
}

export default App;
