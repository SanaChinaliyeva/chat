import React, { Component } from 'react';
import './App.css';
import Messages from '../components/Messages/Messages';

const M_URL = "http://146.185.154.90:8000/messages";

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.getMessages();
  };

  getMessages = () => {
    fetch(M_URL).then(response => {
      if (response.ok) {
          return response.json();
      }
      throw new Error('Something went wrong with network request');
      }).then(messages => {
      this.setState({messages});
      }).catch(error => {
      console.log(error);
    });
  };

  render() {
    const messages = this.state.messages;
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
    };
  };
  
  export default App;
  