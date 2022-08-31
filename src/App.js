import { Component } from 'react';
import './App.css';

class App extends Component{
constructor(){
  super();
this.state={
  monsters:[
    {
      name:'Aman'
    },
    {
      name:'Simran Monster'
    },
    {
      name:'Abhay'
    },
  ],
}
}

  render()
  {
return (
      <div className="App">
       {this.state.monsters.map((monsters) => {
        return <h1>{monsters.name}</h1>;
       })}
      </div>
    );
  }
};
export default App;
