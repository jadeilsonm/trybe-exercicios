import React from "react";
import Pokedex from "./ components/pokedex/Pokedex";


class App extends React.Component {
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <Pokedex />
        </header>
      </div>
    );
  }
}

export default App;