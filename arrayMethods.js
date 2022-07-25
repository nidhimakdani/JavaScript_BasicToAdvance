/////   Array methods 

// foreach 
// Map
// filter 
// reducer
//sort
//find
//every //boolean
//some // boolean
//fill
//splice

//////////////// FOREACH
// const numbers = [1,2,3,4,5,6];

// numbers.forEach(function(num ,i ){
//     console.log(`index is ${i} and number is ${num} `)
// })

// numbers.forEach((num )=>{
//     console.log(num)
// } )

/////////// MAP METHOD 

// const users = [
//     {name : 'nidhi', surname:'makdani'},
//     {name : 'kashish', surname:'jethwani'},
//     {name : 'shivangi', surname:'savsaviya'}
// ]

// const userNames = users.map((user)=>{
//     return user.surname
// })
// console.log(userNames)

///////// FILTER 

// const numbers = [1,2,3,4,5,6]


// const isEven = function(number){
//     return number%2===0;
// }

// console.log(numbers.filter(isEven)) 

//// Reduce method ===================================
// const numbers = [1,2,3,4,5,6]

// const sum = numbers.reduce((accumlator, currentValue)=>{
//     return accumlator + currentValue;
// }) // // we can pass initial value here

// console.log(sum)

///// why output is 21

// //  
// /// accumlator and currentValue
//         // 1               2               3
//         // 3               3               6
//         // 6               4               10
//         // 10              5               15
//         // 15              6               21


//// let's see real life example of reducer 

// const Products = [
//     {productId:1, productName: 'keyboard', price: 2000},
//     {productId:2, productName: 'mouse', price: 2200},
//     {productId:3, productName: 'mousePad', price: 500}
// ]

// const finalPrice = Products.reduce((totalAmount, ProductPrice)=>{
//     return totalAmount + ProductPrice.price;
// },0)

// console.log(finalPrice);

////////////////////    sORT
//// sort dosn't work properly for numbers 
//// sort according to asccii value 

// const dictionary = ['Nidhi','kashish','Kashish','nidhi','Rupal','rupal','shivangi']
// dictionary.sort()
// console.log(dictionary)

// //// Now how to do it for numbers 

// const numbers = [9521446,458597,56456465,78748,79878]
// numbers.sort((a,b)=>{
//     return a - b;
// })
// console.log(numbers)

// // divide two number and switch if a-b is positive output then  switch a and b

// // Lets take realLife example of sorting 

// // in shopping site we have option of sorting products low to high how to do it with sort method 

// const prods = [
//     {name:'p1',price:2000},
//     {name:"p3",price:50},
//     {name:'p4',price:5880},
//     {name:'p5',price:9600},
//     {name:'p6',price:5000},
//     {name:'p7',price:100000},
// ]

// //// soring it with sort method

// const lowToHigh = prods.sort((a,b)=>{
//     return a.price - b.price;
// })
// console.log(lowToHigh)

// //     Find method 

// const users = [
//     {userid: 1, name : 'nidhi', surname:'makdani', status: 'Active', id :3},
//     {name : 'kashish', surname:'jethwani', status: 'NotActive', id :5},
//     {name : 'shivangi', surname:'savsaviya', status: 'Active', id :1}
// ]

// const activae = users.find((user)=>{
//     return user.status=='Active'
// })

// console.log(activae)


// //  Every method
// const users = [
//     {name : 'nidhi', surname:'makdani', status: 'Active', id :3},
//     {name : 'kashish', surname:'jethwani', status: 'Active', id :5},
//     {name : 'shivangi', surname:'savsaviya', status: 'Active', id :1}
// ]
// const checkingActive = users.every((user)=>{
//     return user.status=='Active'
// })
// console.log(checkingActive)

// // some Method
// const users = [
//     {name : 'nidhi', surname:'makdani', status: 'Active', id :3},
//     {name : 'kashish', surname:'jethwani', status: 'nonActive', id :5},
//     {name : 'shivangi', surname:'savsaviya', status: 'Active', id :1}
// ]

// const check = users.some((user)=>user.id='nonActive')
// console.log(check)

// //  Fill Methods  // value start end
// const users = [
//   1,2,3,4,5,5,6
// ]
// console.log(users.fill(0,0,5))

// // splice method 
// // delete or insert in array
// // index delete insert
const users = [
    1,2,3,4,5,5,6
]
users.splice(1,2) // start from item 1 and delete 2 items
console.log(users)

users.splice(1,0,'inserted item')
console.log(users)

users.splice(3,2,'abc','xyz')
/// start from 3 index and delete 2 items 
console.log(users)