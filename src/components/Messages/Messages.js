import React from 'react';
import Message from './Message/Message';
import moment from 'moment';

const Messages = props => {
    return (
        <div>
            {props.messages.map(message => {
                return (<Message 
                        key={message._id} 
                        message={message.message} 
                        date={moment(message.datetime).format("MMM Do YY")} 
                        author={message.author} />)
            })}
        </div>
    );
};

export default Messages;