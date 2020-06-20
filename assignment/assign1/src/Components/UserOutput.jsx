import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Username:{props.username}</p>
            <p>Hello From React</p>
        </div>
    )

}


export default UserOutput;