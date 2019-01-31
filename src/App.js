import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state={
    messages:[ ]
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
 handleCreateMessage= (username,text) => {
 	this.setState({
    	messages:this.state.messages.concat({username:username,text:text})
    })
 }

  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    
        <div className="container">
    	{users.map(user=>(
          <ChatWindow user={user} messages={this.state.messages} onMessage={this.handleCreateMessage}/>
        ))}
		</div>
    	   	
      </div>
    );
  }
}

export default App;
