import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:'Vinita', age:26},
      {name:'Nikhil', age:30},
      {name:'Akash', age:25}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age:26},
        {name:'Nikhil', age:30},
        {name:'Akash', age:35}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Vinita', age:26},
        {name: event.target.value, age:30},
        {name:'Akash', age:35}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      padding: '8px',
      font: 'inherit',
      border: '1px solid blue'

    }
    return (
      <div className="`App`">
          <h1>Hi, I am learning React</h1>
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Vinni!!')}>Switch name</button>
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Vini')}
            changed={this.nameChangeHandler}>Hobbies: Rubix Cube</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null,'Hi, I am learning React again'));
  }
}

export default App;
