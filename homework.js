// Episode 1

// const name = 'Keith';
//
// const printName = function () {
//   console.log(`My name is ${ name }`);
// }
//
// printName();

// My name is Keith. This happens because the variable name has been assigned "Keith".
// When the printName function is invoked, the function prints "My name is Keith", along with string
// interpolation, which is the name variable.

// Episode 2
const score = 5;

const result = function () {
  const score = 3;
  return score;
}

console.log(result());


// The variable score is initially set as 5. The result function is invoked in the console.log.
// A second score variable, within the result function, sets the value as 3. When the result function is invoked
// it prints 3, as the score variable is block specific. If you were to console.log(score), this would return 5.

// Episode 3
// const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// const listAnimals = function () {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//
//   for (const i = 0; i < myAnimals.length; i++) {
//     console.log(`${ i }: ${ myAnimals[i] }`);
//   }
// }
//
// listAnimals();
// Node throws an error as myAnimals has been set as constant. Unlike the previous example, a new myAnimals
// is not created in within the function; instead it is trying to reassign a constant variable to a new value.
// This is not allowed and so breaks the code.

// Episode 4
const suspectOne = 'Jay';
const suspectTwo = 'Val';
const suspectThree = 'Keith';
const suspectFour = 'Rick';

const allSuspects = function () {
  const suspectThree = 'Harvey';
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
}

allSuspects();
console.log(`Suspect three is: ${ suspectThree }`);
//Various names are assigned to suspectOne through Four. Once in the function, suspectThree is reassigned
// to Harvey. This means when allSuspects function is invoked Harvey is printed out in suspectThree.
// However, when the console.log calls upon suspectThree, it will return 'Keith' instead, as Harvey has block-scope.


// Episode 5
const detective = {
  name: 'Ace Ventura',
  pet: 'monkey'
};

const printName = function (detective) {
  return detective.name;
}

const detectiveInfo = function () {
  detective['name'] = 'Poirot';
  return printName(detective);
}

console.log(detectiveInfo());
// Assuming this code is seperate from Episode 1, then the output of console.log(detectiveInfo()) is Poirot.
// If it is together, then printName function has already been assigned, so Node throws an error.
// The constant variable detective is an object, and so the object can be altered.
// This is done in detective info, changing the detective name to Poirot. It is still the same object thoughh,
// and so the pet is still the same.
// If you were to console.log(detective.name), then Ace Ventura would be the output. This is because the
// detective name is only overwritten if the detectiveInfo function is called.

// Episode 6
const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log(`The murderer is: ${ murderer }`);

// The constant variable murderer = 'marc' has block-scope, and so prevents murderer from being reassigned
// to valerie.
// If you comment out valerie, then the murderer is still Rick, as the console.log() is outside the functions
// meaning that the outermost assignment of the murderer is called.
// Also, Keith is clearly the murderer.
