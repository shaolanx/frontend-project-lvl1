/* eslint-disable eqeqeq */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) { // задаем три вопроса
    const number = Math.ceil(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = ' ';
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}`);
        break;
      }
    } else if (number % 2 != 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
        break;
      }
    } if (i === 3) {
      console.log(`Congratulations: ${userName}!`);
    }
  }
};
