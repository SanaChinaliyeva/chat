import React, { Component } from 'react';
import './App.css';
import Message from '../components/Messages/Message/Message';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="card">
          <h5 className="card-header">AJS1</h5>
          <div className="card-body" id="chat-body" style={{maxHeight: "300px",
          overflowY: "scroll"}}>
            <Message message="hello" date="12.01.2019" author="Hello" />
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default App;
  