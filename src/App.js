import React, { Component } from 'react';
import ColoredText from './ColoredText';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "Hello, world.",
      color: "green"
    }
  }

  render() {
    return (
      <div className="App">
        <ColoredText {...this.state}/>
      </div>
    );
  }
}

export default App;