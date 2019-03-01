import React from 'react';

const AddMessageForm = props => {
    return (
        <form>
            <div className="input-group">
            <textarea value={props.currentMessage} onChange={props.handleChange} required className="form-control" rows="1" placeholder="Your message"></textarea>
            <button onClick={props.handleClick} className="input-group-append py-0 px-3 border-0">-></button>
            </div>
        </form>
    );
};

export default AddMessageForm;