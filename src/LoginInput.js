import React from 'react';

function LoginInput(props) {
  
    return (
      <div>
        <label htmlFor={props.type}>What is your {props.type}?
          <input placeholder={props.type.toUpperCase()} name={props.type} />
        </label>
        <br />
      </div>
    );

}

export default LoginInput;
