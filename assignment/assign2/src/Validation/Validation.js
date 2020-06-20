import React from 'react';

const Validation = (props) => {

    let validationMessage = 'Text long enough';

    console.log("props length==>", props.len);
    if (props.len < 5) {
        validationMessage = 'Text too short';
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );

}

export default Validation;