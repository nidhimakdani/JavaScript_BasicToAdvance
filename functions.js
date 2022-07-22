
// function sumNum(a,b){
    
//     return a +b;
// }   
// // call(2+4);
// console.log( sumNum(9,5))

//// ARROW FUNCTIONS

// const arrowFun = () => {

// }
// const arrowFun = (a,b) => {

// }
// const arrowFun = number => {

// } // when you havve 1 argument 

////// HOISTING                   
// hello()

// function hello() {
//     console.log("first")
// }

// const hello = () => {
//     console.log("first")
// }

/////// v FUNCTION INSIDE FUNCTION

// const fun=()=>{
//     console.log("function inside function")

//     const fun2=()=>{
//         console.log("fun 2")
//     }

//     const fun3=()=>{
//         console.log("fun 3")
//     }

//     const fun4=()=>{
//         console.log("fun 4")
//     }
//     fun2()
//     fun4()
//     fun3()
// }

// fun();


////// FUNCTION RETURNING FUNCTION -------
///// returning array 
// const myFunc = () => {
//     return [1,2,3];
// }
// const ans = myFunc();
// console.log(ans)
////we'll return function 
const myFunc = () => {
    const myFunc2 = () => {
        console.log('from another function')
    }
    return myFunc2();
}
const ans = myFunc();
console.log(ans)
//// that's how we can return function inside function 
///////         It's also called higher order function 
