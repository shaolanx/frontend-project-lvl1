import { randomNumber, gamesEngine } from '../index.js';

const mainMessage = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 > num1) {
    return findGcd(num2, num1);
  }
  if (!num2) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const buildRound = () => {
  const randomNum1 = randomNumber(10, 20);
  const randomNum2 = randomNumber(20, 50);
  const question = `${randomNum1} ${randomNum2}`;
  const rightAnswer = String(findGcd(randomNum1, randomNum2));
  return [question, rightAnswer];
};

const brainGcd = () => {
  gamesEngine(mainMessage, buildRound);
};

export default brainGcd;
