import { gameEngine, getRandomInt } from '../index.js';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const questGen = () => {
    const n1 = getRandomInt(1, 100);
    const n2 = getRandomInt(1, 100);
    console.log('Question:', n1, n2);
    return (n1 > n2 ? [n1, n2] : [n2, n1]);
  };
  const answerGen = ([n1, n2]) => {
    const nod = (q, r) => {
      if (r === 0) {
        return q;
      }
      const r1 = q % r;
      return nod(r, r1);
    };
    return nod(n1, n2).toString();
  };
  gameEngine(description, questGen, answerGen, 3);
};
