import {useState, useEffect} from 'react'
import { pickQuizData } from '../helpers.js';
import Swatch from './Swatch'
import Options from './Options'

const OPTION_COUNT = 8;

function Quiz({colors, difficulty}) {
  const [quizData, setQuizData] = useState(pickQuizData(colors, OPTION_COUNT, difficulty));
  const [showFailedState, setShowFailedState] = useState(false)
  const [showSuccessState, setShowSuccessState] = useState(false)
  const [showOptionSwatch, setShowOptionSwatch] = useState(false)

  useEffect(() => {
    resetQuiz();
  }, [colors, difficulty])
  
  const {colorOptions, correctColorIndex} = quizData;

  const correctColor = colorOptions[correctColorIndex];

  const resetQuiz = () => {
    setShowFailedState(false);
    setShowSuccessState(false);
    setShowOptionSwatch(false);
    setQuizData(pickQuizData(colors, OPTION_COUNT, difficulty))
  }

  const flashSuccess = () => {
    setShowFailedState(false)
    setShowSuccessState(true);
    setShowOptionSwatch(true)
  }

  const handleSelect = selectedIndex => {
    const isCorrect = selectedIndex === correctColorIndex;
    if(isCorrect) {
      flashSuccess()
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
      <div>
        <Options options={colorOptions} onSelect={handleSelect} showOptionSwatch={showOptionSwatch} />
        {showFailedState && <div style={{color: 'red'}}>Incorrect</div>}
        <div className="success" style={{color: 'green', opacity: showSuccessState ? 1 : 0}}>Correct! 🎉</div>
        {showSuccessState && <button onClick={resetQuiz}>Next</button>}
      </div>
    </div>
  );
}

export default Quiz;
