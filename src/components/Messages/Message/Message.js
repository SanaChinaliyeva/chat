import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return (
            <div className="card mb-1">
                <div className="card-body">
                    <h6 className="d-flex justify-content-between">{this.props.author} <span className="text-muted">{this.props.date}</span></h6>
                    <div>{this.props.message}</div>
                </div>
            </div>
        );
    };
};

export default Message;