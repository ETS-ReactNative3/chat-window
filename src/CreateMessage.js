import React, {Component} from 'react'

class CreateMessage extends Component {
  state = {
    text:''
  }

   isDisabled = () => {
    return false;
  }; 

  handleSendMessage = (e) => {
  	this.setState({text:e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreateMessage(this.state.text);
    this.setState({text:''});
  }

render(){
	return(
    	<div>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input 
  					type="text" 
  					className="form-control" 
  					placeholder="Enter your message..." 
  					value={this.state.text} 
					onChange={this.handleSendMessage}
				/>

                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>

              </form>
      	</div>
    )
}
}
export default CreateMessage;