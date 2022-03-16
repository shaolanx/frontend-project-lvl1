import readlineSync from 'readline-sync';

const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n');
  if (name.length === 0) {
    console.log('Wrong name, try again!');
  } else {
    console.log(`Hello, ${name}`);
  }
};

export default Greeting;
