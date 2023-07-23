export const getRandomIndex = colors => Math.floor(Math.random() * colors.length);

const difficultyRangeLengths = {
  easy: null,
  medium: 1000,
  hard: 100,
  superHard: 10,
}

export const pickColorOptions = (colors, optionCount, difficulty) => {
  let colorRange = [...colors];

  // get range length
  let rangeLength = difficultyRangeLengths[difficulty];
  let startingIndex = getRandomIndex(colorRange) % (colorRange.length - rangeLength);

  if (rangeLength + startingIndex > colorRange.length) {
    rangeLength = rangeLength
  }
  if (rangeLength) {
    colorRange = colorRange.slice(startingIndex, startingIndex + rangeLength);
  }

  // get options
  const options = [];
  for (let i = 0; i < optionCount; i++) {
    const index = Math.floor(Math.random() * colorRange.length);
    const color = colorRange[index];
    options.push(color);
    colorRange.splice(index, 1);
  }

  return options;
}
