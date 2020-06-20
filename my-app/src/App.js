import React, { Component } from 'react';
import Person from './Person/Person'
//import './App.css';
import styles from './App.module.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null;
    let buttonClass = [styles.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );


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
export default App;
