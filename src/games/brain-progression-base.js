import { randomNumber, gamesEngine } from '../index.js';

const mainMessage = 'What number is missing in the progression?';

const getArr = (arrLength, arrfirstNum, arrStep) => {
  const progression = [arrfirstNum];
  for (let i = 0; i <= arrLength; i += 1) {
    const num = progression[i] + arrStep;
    progression.push(num);
  }
  return progression;
};

const buildRound = () => {
  const arrLength = randomNumber(5, 10);
  const arrfirstNum = randomNumber(1, 15);
  const arrStep = randomNumber(3, 10);
  const progression = getArr(arrLength, arrfirstNum, arrStep);
  const hideNumber = randomNumber(0, arrLength - 1);
  const rightAnswer = String(progression[hideNumber]);
  progression[hideNumber] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const brainprogression = () => {
  gamesEngine(mainMessage, buildRound);
};

export default brainprogression;
