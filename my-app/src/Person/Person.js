import React from 'react';

import styles from './Person.module.css';
const Person = (props) => {

    /* const randomNumber = Math.random();

    if (randomNumber > 0.7) {
        throw new Error('something went wrong');
    } */

    return (
        <div className={styles.Person}>
            <p onClick={props.click} > I'm a {props.name} and I am {props.age} years old!</p>
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;