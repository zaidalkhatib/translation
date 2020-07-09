import React from 'react';

const Input = (props) => {
  return (
    <div style={{padding: '20px', margin: '10px'}}>
      <div className="ui fluid action input">
        <input
          onChange={(e) => {
            props.handleInput(e.target.value);
          }}
          type="text"
          placeholder="Type here..."
        />
        <div className="ui button">Search</div>
      </div>
    </div>
  );
};

export default Input;
