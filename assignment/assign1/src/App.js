import React,{Component} from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

 class App extends Component {
  state = {
    username : 'John Wick'
  }

  nameChangedHandler = (event) => {
    this.setState({
         username: event.target.value
    })
   }
  
  render(){
    return (
      <div className="App">
      <UserInput changed={this.nameChangedHandler} />
      <UserOutput username={this.state.username}/>
      <UserOutput username='Patrick Jane'/>
      </div>
    );
   }
  
}

export default App;
