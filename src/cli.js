import readlineSync from 'readline-sync';

let name = '';
const Greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  if (name.length === 0) {
    console.log('Wrong name, try again!');
  } else {
    console.log(`Hello, ${name}`);
  }
};

export default Greeting;
