import {useState} from 'react';
import {cssColors, crayolaColors, pantoneColors} from './colors';
import Quiz from './components/Quiz';
import './App.css';

const colorGroups = {
  css: cssColors,
  crayola: crayolaColors,
  pantone: pantoneColors,
}

const CSS = 'css';
const CRAYOLA = 'crayola';
const PANTONE = 'pantone';

const DEFAULT_COLOR_GROUP = PANTONE;

function App() {
  const [colors, setColors] = useState(colorGroups[DEFAULT_COLOR_GROUP])
  
  const handleSelect = (colorGroup) => {
    setColors(colorGroups[colorGroup])
  }

  return (
    <div className="App">
      <form>
        <input type="radio" value="css" name="colorGroup" id="css" defaultChecked={DEFAULT_COLOR_GROUP === CSS} onClick={() => handleSelect(CSS)}/>
        <label htmlFor="css">CSS</label>
        <input type="radio" value="crayola" name="colorGroup" id="crayola" defaultChecked={DEFAULT_COLOR_GROUP === CRAYOLA} onClick={() => handleSelect(CRAYOLA)}/>
        <label htmlFor="crayola">Crayola</label>
        <input type="radio" value="pantone" name="colorGroup" id="pantone" defaultChecked={DEFAULT_COLOR_GROUP === PANTONE} onClick={() => handleSelect(PANTONE)}/>
        <label htmlFor="pantone">Pantone</label>
      </form>
      <Quiz colors={colors}/>
    </div>
  );
}

export default App;
