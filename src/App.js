import { Component } from 'react';
import './App.css';

class App extends Component{
constructor(){
  super();
this.state={
  monsters:[
    {
      name:'Aman',
      id:'12e903e'
    },
    {
      name:'Simran Monster',
      id:'12e603e'
    },
    {
      name:'Abhay',
      id:'12e083e'
    },
  ],
}
}

  render()
  {
return (
      <div className="App">
       {this.state.monsters.map((monsters) => {
        return <div><h1 key={monsters.id}>{monsters.name}</h1></div>;
       })}
      </div>
    );
  }
};
export default App;
