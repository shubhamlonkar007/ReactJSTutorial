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
      { name: 'Shubham', age: 24 },
      { name: 'Patrick', age: 45 },
      { name: 'Tony', age: 54 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Shubham', age: 24 },
        { name: newName, age: 45 },
        { name: 'Tony Stark', age: 55 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 35 },
        { name: 'Patrick', age: 45 },
        { name: 'Tony Stark', age: 55 }
      ]
    })
  }

  togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        { 
           this.state.showPersons ? 
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Patrick Jane')}>Profession: CBI consultant</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div> : null
        }
      </div>
    )
  }
}
export default App;
