import chroma from 'chroma-js';

function userColorGenerate() {
  const randomNumber = Math.floor(Math.random() * 360);
  const hexColor = chroma.hsl(randomNumber, 0.34, 0.81).hex();
  return hexColor;
}
export default { userColorGenerate };
