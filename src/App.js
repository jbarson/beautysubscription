import React, { Component } from 'react';
import './App.css';
import LoginInput from "./LoginInput";

class App extends Component {
  createAccount(){
    console.log('hello');
  }
  render() {
    return (
      <div className="App">
        <div className="createAccount">
          <h1>Create an Account</h1>
          <h2>Another line of text</h2>
          <LoginInput type="name"></LoginInput>
          <LoginInput type="email"></LoginInput>
          <LoginInput type="mobile"></LoginInput>
          <LoginInput type="password"></LoginInput>
          <button onClick={this.createAccount}>Create</button>
        </div>
      </div>
    );
  }
}

export default App;
