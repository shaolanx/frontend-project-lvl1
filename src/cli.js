import readlineSync from 'readline-sync';

let name = '';
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return true;
};

export default Greeting;
