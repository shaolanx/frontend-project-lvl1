import { randomNumber, gamesEngine } from '../index.js';

const mainMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const buildRound = () => {
  const randomNum = randomNumber(1, 100);
  const question = `${randomNum}`;
  const rightAnswer = getEven(randomNum) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEven = () => {
  gamesEngine(mainMessage, buildRound);
};

export default brainEven;
