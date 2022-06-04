import './App.css';
import React from "react"; 
import {Counter} from "./Components/Counter.jsx"
import {Navbar} from "./Components/Navbar.jsx"

function App() {

  return (
    <div className="App">
      <Navbar title="Counter App"/>
      <Counter inc={1} dec={-1} double={2}/>
      
    </div>
  );
}

export default App;
