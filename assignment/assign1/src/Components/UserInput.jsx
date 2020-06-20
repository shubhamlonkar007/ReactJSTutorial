import React from 'react';
const style ={
    backgroundColor:'white',
    font:'inherit',
    border: '1px solid blue',
    padding:'2px',
    cursor:'pointer'
  }
const UserInput = (props) => {
        return(
            <div>
                <input style={style} type="text" onChange={props.changed} />
            </div>
        )    
}

export default UserInput;