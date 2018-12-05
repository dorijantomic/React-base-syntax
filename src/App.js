import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Button from './Button/Button';
class App extends Component {
  state = {
    username: 'Dorijan'
  }

  handleUserInput = (event) => {
    this.setState({
     username: event.target.value
    })
  }

  greetingUser = () => {
    return alert(`Hello ${this.state.username} Welcome to the world of React`);
  }
  render() {
    return (
      <div className="App">
        <UserInput
        change={this.handleUserInput.bind(this)}
        username = {this.state.username}
         />
       
        <UserOutput 
        username = {this.state.username}
        ></UserOutput>
        <UserOutput 
        username = {this.state.username}
        ></UserOutput>
        <UserOutput 
        username = {this.state.username}
        ></UserOutput>
        <UserOutput 
        username = {this.state.username}
        ></UserOutput>
          <Button click = {this.greetingUser}/>
      </div>
    );
  }
}

export default App;
