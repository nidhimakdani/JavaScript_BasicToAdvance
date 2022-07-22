// // important array methods 

// const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

// const users = [
//     {firstName: "nidhi", age: 23},
//     {firstName: "kashish", age: 21},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }

// //     map method 
// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "nidhi", age: 23},
//     {firstName: "kashish", age: 21},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);

//// filter method 

const numbers = [1,3,2,6,4,8];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);