import React, { Component } from 'react';
import Person from './Person/Person'

//import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      
    </div>
  );
}
 */

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

  /* switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Shubham', age: 24 },
        { name: newName, age: 45 },
        { name: 'Tony Stark', age: 55 }
      ]
    })
  } */

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      console.log("p.id==>", p.id);
      console.log("id===>", id);
      console.log("p.id===id===>", p.id === id);
      return p.id === id;
    });

    console.log("personIndex===>", personIndex);

    const person = {
      ...this.state.persons[personIndex]
    }

    console.log("person===>", person);


    person.name = event.target.value;

    console.log("person.name==>", person.name);

    const persons = [...this.state.persons];

    console.log("persons====>", persons)

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    console.log("doesShow===>", doesShow);
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    )
  }
}
export default App;
