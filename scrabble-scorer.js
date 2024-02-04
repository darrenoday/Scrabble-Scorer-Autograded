// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

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
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints = letterPoints + Number(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word: ");
   for (i=0;i<word.length;i++){
      let charCode = word.charCodeAt(i);
      if( !(charCode > 96 && charCode < 123) &&
      !(charCode > 64 && charCode < 91)&& !(charCode === 32 )){
         console.log( 'invalid input, please input a word consisting of letters a-z, without numbers or special characters'
      );
      return initialPrompt();
   }
      }
   };
      


function simpleScorer(word){
   let wordToScore = word.toUpperCase().split('');
   
   let letterPoints = '';
   letterPoints = wordToScore.length;
 return letterPoints
   };
  


function vowelBonusScorer(word){
wordToScore = word.toUpperCase().split('');
   
let letterPoints = 0;
for (let i = 0; i < wordToScore.length; i++){
   if(wordToScore[i] === "A" || 
      wordToScore[i] === "E" || 
      wordToScore[i] === "O" || 
      wordToScore[i] === "U" || 
      wordToScore[i] === "I"){

   letterPoints += 3
   
   } else {
      letterPoints += 1
   }

}
return letterPoints
};

function scrabbleScorer(word){
   word = word.toLowerCase();
   let letterPoints = 0;
 
	
 
	  for (const pointValue in newPointStructure) {
         for(i=0;i<word.length;i++){

         
		 if (word[i].includes(pointValue)) {

			letterPoints =  letterPoints + newPointStructure[word[i]];
 
	  }
	

   }
   
}
return letterPoints;
};
	


const scoringAlgorithms = [
      objectOne = {
      name: 'Simple Score',
      description: 'Each letter is worth 1 point.',
      scorerFunction: simpleScorer,

    },
     objectTwo = {
      name: 'Bonus Vowels',
      description: 'Vowels are 3 pts, consonants are 1 pt',
      scorerFunction: vowelBonusScorer,

     },
     objectThree = {
      name: 'Scrabble',
      description: 'The traditional scoring algorithm',
      scorerFunction: scrabbleScorer,
     }
];

function scorerPrompt() {
   info = input.question(`
      Which scoring algorithm would you like to use?
   
      0 - Simple: One point per character
      1 - Vowel Bonus: Vowels are worth 3 points
      2 - Scrabble: Uses scrabble point system
      Enter 0, 1, or 2: `);
      if(info < 0 || info > 2 || isNaN(info) ){
         console.log('invalid input, please enter  0, 1, or 2. ');
       return scorerPrompt();
      } else {
   console.log("alorithm name:", scoringAlgorithms[info].name);
   console.log("scoringFunction result:\n",scoringAlgorithms[info].scorerFunction(word));
}
};

function transform(obj) {
   let obj2 = {};
   newKeyArray = Object.keys(obj);
   j=-1
   for (item in obj){
      j++
      for(i = 0; i < obj[item].length; i++){
obj2[obj[item][i].toLowerCase()] = Number(newKeyArray[j]);
      }

   }
   return obj2;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
