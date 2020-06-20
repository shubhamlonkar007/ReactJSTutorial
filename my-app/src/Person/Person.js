import React from 'react'
import './Person.css'
const Person = props => {
  return (
    <div className='Person'>
      <p onClick={props.handleClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.handleChanged} value={props.name} />
    </div>
  );
}

export default Person
