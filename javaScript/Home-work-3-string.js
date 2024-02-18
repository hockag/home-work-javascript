const result = 5+5+'5';
console.log(typeof result);
//exercise 1


const email = 'rospetrushka@gmail.com';
const find = email.includes('@');
const totalChracters = email.length;
console.log(find, totalChracters);
//exercise 2



const word1 = 'My';
const word2 = 'name';
const word3 = 'is';
let fullName = word1 + ' ' + word2 + ' ' + word3 + ' ';
fullName += 'Victor';
console.log(fullName);
//exercise 3



const userName = 'Victor';
const payment = 300;
let message = `Дякуємо, ${userName}! До сплати ${payment} гривень`;
alert(message);