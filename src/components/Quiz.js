import {useState} from 'react'
import {crayolaColors as colors} from "../colors";
import { pickQuizData } from '../helpers.js';
import Swatch from './Swatch'
import Options from './Options'

const OPTION_COUNT = 8;

function Quiz() {
  const [quizData, setQuizData] = useState(pickQuizData(colors, OPTION_COUNT));
  const [showFailedState, setShowFailedState] = useState(false)
  const [showSuccessState, setShowSuccessState] = useState(false)
  
  const {colorOptions, correctColorIndex} = quizData;

  const correctColor = colorOptions[correctColorIndex];

  const resetQuiz = () => {
    setShowFailedState(false);
    setShowSuccessState(false);
    setQuizData(pickQuizData(colors, OPTION_COUNT))
  }

  const flashSuccess = () => {
    setShowFailedState(false)
    setShowSuccessState(true);
  }

  const handleSelect = selectedIndex => {
    const isCorrect = selectedIndex === correctColorIndex;
    if(isCorrect) {
      flashSuccess()
      setTimeout(() => {
        resetQuiz()
      }, 1000);
    } else {
      setShowFailedState(true)
    }
  }

  if(!correctColor) {
    return <span>loading...</span>
  }

  return (
    <div className="Quiz">
      <Swatch color={correctColor} />
      <Options options={colorOptions} onSelect={handleSelect} />
      {showFailedState && <div style={{color: 'red'}}>Incorrect</div>}
      <div className="success" style={{color: 'green', opacity: showSuccessState ? 1 : 0}}>Correct! 🎉</div>
    </div>
  );
}

export default Quiz;
