import { randomNumber, gamesEngine } from '../index.js';

const mainMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let flag = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = 'no';
      break;
    }
  }
  return flag;
};

const buildRound = () => {
  const randomNum = randomNumber(10, 20);
  const question = `${randomNum}`;
  const rightAnswer = String(isPrime(randomNum));
  return [question, rightAnswer];
};

const brainprime = () => {
  gamesEngine(mainMessage, buildRound);
};

export default brainprime;
