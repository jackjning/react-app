import React from "react";

class LoggingButton extends React.Component {
    handleClick() {
      console.log('You just clicked button 1');
    }
  
    render() {
      return (
        <button onClick={() => this.handleClick()}>
          Button 1
        </button>
      );
    }
  }

export default LoggingButton;