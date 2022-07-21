// @author nidhimakdani 

// //   *****************ARRAY CONCEPT***************************************************************

// let fruit = 'apple' 
// // orderd collection of items or elements 

// let fruits = ['apple','orange','graps'];
// // each element will have index starting from 0 
// console.log(fruits)
// console.log(fruits[0])
// fruits[1] = 'abc'
// //array is mutable we can change the values
// console.log(fruits)
// // console.log(fruits[-1])

// console.log(Array.isArray( fruits)) //to check this object is array or not


// //     ARRAY METHODS               
// let numbers = [1,2,3,4,5]
// console.log(numbers)
// let num = 10
// numbers.push(num)
// console.log(numbers)
// console.log(numbers.pop()) //return the last index element 


//unshift 
// numbers.unshift(1)
// console.log(numbers)

// numbers.shift(1)
// console.log(numbers)

//push and pop are faster than shift and unshift

//// clone array **************************************************************
//// method 1 (fastest way)
// let a1 =[1,2]
// let a2=a1.slice(0) // will copy the array and change will not reflect in array 2
////method 2
// let a2 =[].concat(a1)
// // method 3
// spread operatore
// let a2 = [...a1]

//////////////////////////////////////////    NOW IF YOU WANT TO MERGE TWO ARRAY IN NEW ARRAY

// let a1 = [1,2]
// let a2 = [3,4]
// let a3 =  [...a1,...a2]
// console.log(a3)


// let array1 = [1,2,3,4,5]
// console.log(array1)

// for(let i =0 ; i<array1.length; i ++)
// {
//     console.log(array1[i])
// }

///// const is safe for creating array so no one can assign diffrent values afterwards
// // push and pop work in const  array 

//// FOR OF AND FOR IN LOOP ******************************************************************

const array1 = [1,2,3,5,6,7]
console.log(first)
//// FOR OF LOOP

// for(let arr of array1)
// {
//     console.log(arr);
// }

// //returtn index fo []
//// FOR IN LOOP
// for(let arr in array1){
//     console.log(array1[arr])
// }

//// array destructuring
// let [array2, array3] = array1;
// let [array2, , array3] = array1;
// console.log(array2)
// console.log(array3)

let [array2, array3, ...restvalues] = array1; // rest values will store in array 4
// let [array2, , array3] = array1;
console.log(array2)
console.log(restvalues)