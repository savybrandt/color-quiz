import {useState, useEffect} from 'react'
import { pickQuizData } from '../helpers.js';
import Swatch from './Swatch'
import Options from './Options'

function Quiz({colors}) {
  const [quizData, setQuizData] = useState(pickQuizData(colors, 8));
  const [showFailedState, setShowFailedState] = useState(false)
  
  useEffect(() => {
    resetQuiz()
  }, [colors])
  
  const {colorOptions, correctColorIndex} = quizData;

  const correctColor = colorOptions[correctColorIndex];

  const resetQuiz = () => {
    setShowFailedState(false);
    setQuizData(pickQuizData(colors, 8))
  }

  const handleSelect = selectedIndex => {
    const isCorrect = selectedIndex === correctColorIndex;
    if(isCorrect) {
       resetQuiz()
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
    </div>
  );
}

export default Quiz;
