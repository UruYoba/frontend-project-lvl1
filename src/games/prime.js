import { gameEngine, getRandomInt } from '../index.js';

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questGen = () => {
    const number = getRandomInt(2, 100);
    console.log('Question:', number);
    return number;
  };
  const answerGen = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  gameEngine(description, questGen, answerGen, 3);
};
