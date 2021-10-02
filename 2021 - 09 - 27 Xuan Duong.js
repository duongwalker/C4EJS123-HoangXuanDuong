// Bai 1. 
// - In JavaScript, there are 3 cases in which you will get the SyntaxError telling you that some of your variables have invalid names:
// + The name contain at least one special character, except for "_" và "$".
// + The first character is a digit.
// + The name is the same as keywords of JavaScript

// - 3 examples of invalid variable names:
// + let 1a = 'something'; // cannot start with a digit
// + let my-name = 'something'; // hyphens '-' aren't allowed in the name
// + let x = break; // break is a keyword in Javascript
// 
// Bai 2: 1-b, 2-a, 3-e, 4-c.

// Bai 3a:
// let message = 'Coding is great';
// console.log (message);

// Bai 3b:
// let studentCount = 0;
// console.log(studentCount);

// Bai 4a:
// let message = 'Coding is great';
// message = 'Coding might not be easy, but still great';
// console.log(message);

// Bai 4b:
// let studentCount = 0;
// studentCount = 16;
// console.log(studentCount);

// Bai 4c:
// message = 'Coding might not be easy, but still great';
// message= message.toLowerCase();
// console.log(message);

// Bai 4d:
// studentCount = 16;
// studentCount ++;
// console.log(studentCount);
// alert(studentCount);

// Bai 5:
// let message = 'You look so beautiful today';
// console.log(message);
// alert(message);

// Bai 6:
// let x = prompt('Hi there, your name please?');
// console.log(`Hi ${x}`);
// alert(`Hi ${x}`);

// Bai 7:
// let x = prompt('Enter your first name');
// let y = prompt('Enter your last name');
// console.log(`Hi ${x} ${y}`);
// alert(`Hi ${x} ${y}`);

// Bai 8:
// let x = prompt('Enter side length of the square');
// y = Math.pow(x,2);
// console.log(`The square area is ${y}`)
// alert (`The square area is ${y}`);

// Bai 9:
// let x = prompt('Enter the radius of the circle');
// y = Math.pow(x,2) * 3.14;
// console.log(`The circle area is ${y}`);
// alert (`The circle area is ${y}`)

// Bai 10:
// let x = prompt('Enter the temperature in Celsius');
// y = x * 9/5 + 32;
// console.log(`${x} (C) = ${y} (F)`);
// alert (`${x} (C) = ${y} (F)`);