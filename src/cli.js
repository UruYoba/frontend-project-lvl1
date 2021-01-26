import readline from 'readline-sync';

export const greeting = () => {
  const name = readline.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export const even = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
  let counter = 0;
  while (counter < 3) {
    const number = Math.floor(Math.random() * (1001 - 1)) + 1;
    const correctAnswer = isEven(number);
    console.log(`Question: ${number}`);
    const answer = readline.question('Your answer: ');
    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      counter = 0;
      console.log(`'${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}`);
};
