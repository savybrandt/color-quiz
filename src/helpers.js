export const getRandomIndex = colors => Math.floor(Math.random() * colors.length);

const difficultyRangeLengths = {
  easy: null,
  medium: 100,
  hard: 50,
  superHard: 10,
}

export const pickColorOptions = (colors, optionCount, difficulty) => {
  let colorRange = [...colors];

  // get range length
  const rangeLength = difficultyRangeLengths[difficulty];
  if (rangeLength) {
    const startingIndex = getRandomIndex(colorRange);
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
