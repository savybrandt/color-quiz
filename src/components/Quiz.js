import {useState, useEffect} from 'react'
import { getRandomIndex, pickColorOptions } from '../helpers.js';
import Swatch from './Swatch'
import Options from './Options'

const OPTION_COUNT = 8;

function Quiz({colors, difficulty}) {
  const [colorOptions, setColorOptions] = useState(pickColorOptions(colors, OPTION_COUNT, difficulty));
  const [correctColorIndex, setCorrectColorIndex] = useState(getRandomIndex(colorOptions))
  const [showFailedState, setShowFailedState] = useState(false)
  const [showSuccessState, setShowSuccessState] = useState(false)
  const [showOptionSwatch, setShowOptionSwatch] = useState(false)

  useEffect(() => {
    resetQuiz();
  }, [colors, difficulty])
  
  const correctColor = colorOptions[correctColorIndex];

  const resetQuiz = () => {
    setShowFailedState(false);
    setShowSuccessState(false);
    setShowOptionSwatch(false);
    setColorOptions(pickColorOptions(colors, OPTION_COUNT, difficulty), () => {
      setCorrectColorIndex(getRandomIndex(colorOptions))
    })
  }

  const replayColors = () => {
    const currentCorrectColorIndex = correctColorIndex;
    const newCorrectColorIndex = getRandomIndex(colorOptions)
    setShowFailedState(false);
    setShowSuccessState(false);
    setShowOptionSwatch(false);
    setCorrectColorIndex(newCorrectColorIndex);
  }

  const showSuccess = () => {
    setShowFailedState(false)
    setShowSuccessState(true);
    setShowOptionSwatch(true)
  }

  const flashFailure = () => {
    setShowFailedState(true)
    setTimeout(() => {
      setShowFailedState(false)
    }, 1000);
  }

  const handleSelect = selectedIndex => {
    const isCorrect = selectedIndex === correctColorIndex;
    if(isCorrect) {
      showSuccess()
    } else {
      flashFailure()
    }
  }

  if(!correctColor) {
    return <span>loading...</span>
  }

  return (
    <div className="Quiz">
      <Swatch color={correctColor} />
      <div>
        <div className="result-container">
          <div style={{color: 'green', opacity: showSuccessState ? 1 : 0}}>Correct! 🎉</div>
          <div className="fade-in" style={{color: 'red', opacity: showFailedState ? 1 : 0}}>Incorrect</div>
        </div>
        <Options options={colorOptions} onSelect={handleSelect} showOptionSwatch={showOptionSwatch} />

        <div className="button-container" style={{opacity: showSuccessState ? 1 : 0}}>
          <button onClick={replayColors}>Replay Colors</button>
          <button onClick={resetQuiz}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
