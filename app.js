// console.log('Hello Node!');


// const message = ' Hello Node!'

// const sum = 5 + 3

// sum +=1


// console.log(message)
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };

const fs = require('fs');
 
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2, process.argv.length);




// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const [name, github] = profileDataArgs; 

// console.log(name, github);

// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    
    console.log('Portfolio complete! Check out index.html to see the output!');
  });






// console.log(profileDataArgs)


// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';


// const printProfileData = profileDataArr => {
//     // This...
//     // for (let i = 0; i < profileDataArr.length; i += 1) {
//     //   console.log(profileDataArr[i]);
//     // }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };






//   //calls the previous function with profileData args
//   printProfileData(profileDataArgs);


// // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//   let two = 'two: declared inside the block';
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.



// const generatePage = () => 'Name: Jane, Github: janehub';





