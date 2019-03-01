import React, { Component } from 'react';
import './App.css';
import Messages from '../components/Messages/Messages';
import AddMessageForm from '../components/AddMessageForm/AddMessageForm';

const M_URL = "http://146.185.154.90:8000/messages";
const intervals = [];

class App extends Component {
  state = {
    messages: [],
    currentMessage: ""
  };

  componentDidMount() {
    this.getMessages();
    const interval = setInterval(this.getMessages, 5000);
    intervals.push(interval);
  };

  componentWillUnmount() {
    intervals.map(interval => clearInterval(interval));
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

  handleChange = e => {
    let userInput = e.target.value;
    this.setState({currentMessage: userInput});
  };

  sendMessage = (e) => {
    e.preventDefault();
    const message = new URLSearchParams();
    message.set('message', this.state.currentMessage);
    message.set('author', "girls");
    fetch(M_URL, {
      method: 'post',
      body: message
    }).catch(function(err){console.log(err)});
    this.getMessages();
    this.setState({currentMessage: ""});
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
          <AddMessageForm currentMessage={this.state.currentMessage} handleChange={this.handleChange} handleClick={this.sendMessage} />
        </div>
      </div>
      );
    };
  };
  
  export default App;
  