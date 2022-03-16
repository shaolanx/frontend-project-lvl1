import readlineSync from 'readline-sync';

const roundsCount = 3;

const gamesEngine = (mainMessage, buildRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}`);
  console.log(mainMessage);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = buildRound();
    const userAnswer = readlineSync.question(`Question: ${question}:\n`);
    console.log(`Your answer: ${userAnswer}`);
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gamesEngine;
