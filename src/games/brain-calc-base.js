import gamesEngine from '../index.js';
import randomNumber from '../get-randdom.js';

const mainMessage = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const switchOperator = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return NaN;
  }
};

const buildRound = () => {
  const randomOperator = operators[randomNumber(0, operators.length)];
  const randomNum1 = randomNumber(10, 20);
  const randomNum2 = randomNumber(0, 11);
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const rightAnswer = String(switchOperator(randomNum1, randomNum2, randomOperator));
  return [question, rightAnswer];
};

const brainCalc = () => {
  gamesEngine(mainMessage, buildRound);
};

export default brainCalc;
