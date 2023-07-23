const getRandomIndex = colors => Math.floor(Math.random() * colors.length);

const pickColorOptions = (colors, optionCount) => {
  const colorPool = [...colors];
  const options = [];
  for (let i = 0; i < optionCount; i++) {
    const index = Math.floor(Math.random() * colorPool.length)
    const color = colorPool[index]
    options.push(color)
    colorPool.splice(index, 1)    
  }
  return options
}

const difficultyRangeLengths = {
  easy: null,
  medium: 100,
  hard: 30,
  superHard: 10,
}

export const pickQuizData = (colors, optionCount, difficulty) => {
  let colorRange = [...colors];

  const rangeLength = difficultyRangeLengths[difficulty];
  if (rangeLength) {
    const startingIndex = getRandomIndex(colorRange);
    colorRange = colorRange.slice(startingIndex, startingIndex + rangeLength);
  }

  const colorOptions = pickColorOptions(colorRange, optionCount);
  const correctColorIndex = getRandomIndex(colorOptions);
  return {colorOptions, correctColorIndex};
}
