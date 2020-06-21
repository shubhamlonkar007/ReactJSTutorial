import React, { Component, Fragment } from 'react';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

import styles from './Person.module.css';
class Person extends Component {

//React.Fragment or Fragment is the component which does exactly same like the Aux component we defined.
//

    render() {
        console.log('[Person.js] render')
        /* return (
            <div className={styles.Person}>
                <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        ) */

         return (
            <Aux>
                <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        ) 
        /* return (
            <Fragment>
                <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
        ) */

    }



}

export default withClass(Person, styles.Person);