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

const EASY = 'easy';
const MEDIUM = 'medium';
const HARD = 'hard';
const SUPER_HARD = 'superHard';

const DEFAULT_DIFFICULTY = MEDIUM;
const DEFAULT_COLOR_GROUP = PANTONE;

function App() {
  const [difficulty, setDifficulty] = useState(false);
  const [colors, setColors] = useState(colorGroups[DEFAULT_COLOR_GROUP])
  
  const handleSelectColors = (colorGroup) => {
    setColors(colorGroups[colorGroup])
  }

  const handleSelectDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty)
  }

  return (
    <div className="App">
      <div className="quizSettings">
        <form id="colorGroup">
          <span className="settingLabel">Color Group:</span>
          <input className="radio" type="radio" value="css" name="colorGroup" id="css" defaultChecked={DEFAULT_COLOR_GROUP === CSS} onClick={() => handleSelectColors(CSS)}/>
          <label htmlFor="css">CSS</label>
          <input className="radio" type="radio" value="crayola" name="colorGroup" id="crayola" defaultChecked={DEFAULT_COLOR_GROUP === CRAYOLA} onClick={() => handleSelectColors(CRAYOLA)}/>
          <label htmlFor="crayola">Crayola</label>
          <input className="radio" type="radio" value="pantone" name="colorGroup" id="pantone" defaultChecked={DEFAULT_COLOR_GROUP === PANTONE} onClick={() => handleSelectColors(PANTONE)}/>
          <label htmlFor="pantone">Pantone</label>
        </form>
        <form id="difficulty">
          <span className="settingLabel">Difficulty:</span>
          <input className="radio" type="radio" value="easy" name="difficulty" id="easy" defaultChecked={DEFAULT_DIFFICULTY === EASY} onClick={() => handleSelectDifficulty(EASY)}/>
          <label htmlFor="easy">Easy</label>
          <input className="radio" type="radio" value="medium" name="difficulty" id="medium" defaultChecked={DEFAULT_DIFFICULTY === MEDIUM} onClick={() => handleSelectDifficulty(MEDIUM)}/>
          <label htmlFor="medium">Medium</label>
          <input className="radio" type="radio" value="hard" name="difficulty" id="hard" defaultChecked={DEFAULT_DIFFICULTY === HARD} onClick={() => handleSelectDifficulty(HARD)}/>
          <label htmlFor="hard">Hard</label>
          <input className="radio" type="radio" value="superHard" name="difficulty" id="superHard" defaultChecked={DEFAULT_DIFFICULTY === SUPER_HARD} onClick={() => handleSelectDifficulty(SUPER_HARD)}/>
          <label htmlFor="superHard">Super Hard</label>
        </form>
      </div>
      <Quiz colors={colors} difficulty={difficulty}/>
    </div>
  );
}

export default App;
