import readline from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
// на ввод описание игры, генератор вопроса (сам выводит вопрос), генератор правильного ответа,
// количество необходимых правильных ответов подряд
export const gameEngine = (description, questGen, answerGen, maxCounter) => {
  const name = greeting();
  console.log(description);
  let counter = 0;
  while (counter < maxCounter) {
    const question = questGen();
    const correctAnswer = answerGen(question);
    const answer = readline.question('Your answer: ');
    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export const getRandomInt = (min, max) => Math.round(Math.random() * (max + 1 - min)) + min;
