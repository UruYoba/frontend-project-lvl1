import { gameEngine, getRandomInt } from '../index.js';

export default () => {
  const description = 'What number is missing in the progression?';
  const questGen = () => {
    const progression = [];
    let answer;
    const start = getRandomInt(1, 10);
    const step = getRandomInt(5, 15);
    const length = getRandomInt(5, 10);
    const gupIndex = getRandomInt(0, length);
    for (let i = 0; i < length; i++) {
      if (i === gupIndex - 1) {
        progression.push('..');
        answer = start + step * i;
      } else {
        progression.push(start + step * i);
      }
    }
    console.log('Question:', progression.join(' '));
    return answer;
  };
  const answerGen = (answ) => answ.toString();
  gameEngine(description, questGen, answerGen, 3);
};
