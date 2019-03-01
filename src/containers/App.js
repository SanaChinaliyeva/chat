import React, { Component } from 'react';
import './App.css';
import Messages from '../components/Messages/Messages';

const messages = [
  {message: "hello", datetime: "21.02.2019", id: 0}
];

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="card">
          <h5 className="card-header">AJS1</h5>
          <div className="card-body" id="chat-body" style={{maxHeight: "300px",
          overflowY: "scroll"}}>
            <Messages messages={messages} />
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default App;
  