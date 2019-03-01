import React from 'react';
import Message from './Message/Message';

const Messages = props => {
    return (
        <div>
            {props.messages.map(message => {
                return (<Message key={message._id} message={message.message} date={message.datetime} author="someone" />)
            })}
        </div>
    );
};

export default Messages;