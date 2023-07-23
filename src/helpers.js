const pickRandomColor = colors => Math.floor(Math.random() * colors.length);

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

export const pickQuizData = (colors, optionCount) => {
  const colorOptions = pickColorOptions(colors, optionCount);
  const correctColorIndex = pickRandomColor(colorOptions);
  return {colorOptions, correctColorIndex};
}
