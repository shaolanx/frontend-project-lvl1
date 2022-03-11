import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.ceil(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:\n');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
      break;
    }
    if (i === 3) {
      console.log(`Congratulations: ${userName}!`);
    }
  }
};

export default brainEven;
