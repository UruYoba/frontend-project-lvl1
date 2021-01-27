import { gameEngine, getRandomInt } from '../index.js';

export default () => {
  const description = 'What is the result of the expression?';
  const questGen = () => {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const rand = getRandomInt(1, 3);
    let sign;
    if (rand === 1) {
      sign = '+';
    }
    if (rand === 2) {
      sign = '-';
    } else {
      sign = '*';
    }
    console.log(num1, sign, num2);
    return [num1, sign, num2];
  };
  const answerGen = ([num1, sign, num2]) => {
    let answer;
    if (sign === '+') {
      answer = num1 + num2;
    }
    if (sign === '-') {
      answer = num1 - num2;
    }
    if (sign === '*') {
      answer = num1 * num2;
    }
    return answer.toString();
  };
  gameEngine(description, questGen, answerGen, 3);
};
