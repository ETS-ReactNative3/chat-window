import React, {Component} from 'react'

class CreateMessage extends Component {
  
   isDisabled = () => {
    return false;
  };

  
  
render(){
	return(
    	<div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." />
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