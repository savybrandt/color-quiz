import {useState} from "react"
import {cssColors, crayolaColors} from "./colors";
import Quiz from './components/Quiz';
import './App.css';

const colorMap = {css: cssColors, crayola: crayolaColors}

function App() {
  const [colors, setColors] = useState(colorMap.css)

  const handleClick = (colorGroup) => {
    setColors(colorMap[colorGroup])
  }

  return (
    <div className="App">
      <form>
        <input type="radio" name="colorGroup" id="css" value="css" defaultChecked onClick={() => handleClick('css')}/>
        <label htmlFor="css">CSS</label>
        <input type="radio" name="colorGroup" id="crayola" value="crayola" onClick={() => handleClick('crayola')}/>
        <label htmlFor="crayola">Crayola</label>
      </form>
      <br/>
      <Quiz colors={colors} />
    </div>
  );
}

export default App;
