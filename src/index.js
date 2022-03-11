import readlineSync from 'readline-sync';

const roundsCount = 3;

const gamesEngine = (mainMessage, startRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}`);
  console.log(mainMessage);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = startRound();
    const answer = readlineSync.question(`Question: ${question}:\n`);
    console.log(`Your answer: ${answer}`);
    if (rightAnswer !== answer) {
      console.log(`${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${name}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gamesEngine;
