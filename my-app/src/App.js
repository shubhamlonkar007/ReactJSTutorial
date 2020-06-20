import React, { Component } from 'react';
import Person from './Person/Person'
//import './App.css';
//import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import styles from './App.module.css'


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Shubham', age: 24 },
      { id: '2', name: 'Patrick', age: 45 },
      { id: '3', name: 'Tony', age: 54 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];


    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  render() {
    /* const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }; */

    let persons = null;
    let buttonClass = [styles.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };

      buttonClass.push(styles.Red)
    }


    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red); //classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold); //classes = ['red','bold'];
    }

    return (

      //<div className="App">
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          //className="button"
          className={buttonClass.join(' ')}
          //style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>

    )
  }
}
//export default Radium(App);
export default App;
