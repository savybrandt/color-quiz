import {useState} from "react"
import {crayolaColors as colors} from "./colors";
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <Quiz colors={colors} />
    </div>
  );
}

export default App;
