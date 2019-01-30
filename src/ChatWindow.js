import React,{ Component } from 'react';
import MessageHistory from './MessageHistory'
import CreateMessage from './CreateMessage'

export default class ChatWindow extends Component{

  render(){
  	return(
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <MessageHistory user={this.props.user} messages={this.props.messages}/>  
			<CreateMessage />
          </div>
    )
  }
}
