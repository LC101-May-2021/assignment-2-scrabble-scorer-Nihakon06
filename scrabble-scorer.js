// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
  return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some Scrabble!");
   let word = input.question("Enter a word to score: ");
   return word;
   };

let simpleScore = function(word) {
  let simpleScore = 0;
  for(let i = 0; i < word.length; i++){
    simpleScore++;
  }
  return simpleScore;
};

let vowelBonusScore = function(word) {
  let vowelScore = 0; 
  let vowelsArray = ["A", "E", "I", "O", "U"]; 
  let capitalWord = word.toUpperCase();
  for(let i = 0; i < word.length; i++) {
    if(vowelsArray.includes(capitalWord[i])) {
      vowelScore += 3;
    }
    else{
      vowelScore += 1;
    }
  }
  return vowelScore;
};

let scrabbleScore = function(word) {
  let scrabbleScore = 0;
  let lowerWord = word.toLowerCase();
  for(let i = 0; i < word.length; i++) {
    scrabbleScore += newPointStructure[lowerWord[i]];
    }
  return scrabbleScore;
};


const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
];


function scorerPrompt(word) {
  let selectedInput = input.question(`Which scoring algorithm would you like to use? \n
  0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n
  1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n
  2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description} \n
  Enter 0, 1, or 2: `);
  if (selectedInput === '0') {
    return (`Score for ${word}: ${scoringAlgorithms[0].scoringFunction(word)}`);
  } else if (selectedInput === '1') {
    return (`Score for ${word}: ${scoringAlgorithms[1].scoringFunction(word)}`);
  } else if (selectedInput === '2') {
    return (`Score for ${word}: ${scoringAlgorithms[2].scoringFunction(word)}`);
  } else {
    console.log('Invalid Input');
  }
}

function transform(object) {
  let newPointObject = {};
  for (item in object){
    for (i = 0; i< object[item].length; i++){
      let key = object[item][i].toLowerCase;
      newPointObject[`${key}`]= Number(item);
    }
  }
  return newPointObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let word = initialPrompt();
   console.log(scorerPrompt(word));
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

