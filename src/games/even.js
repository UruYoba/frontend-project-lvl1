import { gameEngine, getRandomInt } from '../index.js';

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answerGen = (number) => (number % 2 === 0 ? 'yes' : 'no');
  const questGen = () => {
    const number = getRandomInt(1, 1000);
    console.log(`Question: ${number}`);
    return number;
  };
  const maxCounter = 3;
  gameEngine(description, questGen, answerGen, maxCounter);
};
