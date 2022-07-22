/////   Array methods 

// foreach 
// Map
// filter 
// reducer

//////////////// FOREACH
// const numbers = [1,2,3,4,5,6];

// numbers.forEach(function(num ,i ){
//     console.log(`index is ${i} and number is ${num} `)
// })

// numbers.forEach((num )=>{
//     console.log(num)
// } )

/////////// MAP METHOD 

const users = [
    {name : 'nidhi', surname:'makdani'},
    {name : 'kashish', surname:'jethwani'},
    {name : 'shivangi', surname:'savsaviya'}
]

const userNames = users.map((user)=>{
    return user.surname
})
console.log(userNames)

///////// FILTER 

// const numbers = [1,2,3,4,5,6]


// const isEven = function(number){
//     return number%2===0;
// }

// console.log(numbers.filter(isEven)) 

//// Reduce method 
const numbers = [1,2,3,4,5,6]

const sum = numbers.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
})

console.log(sum)
