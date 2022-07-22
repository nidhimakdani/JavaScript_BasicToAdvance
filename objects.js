// // object store key value pair and don't have index
//// reference type

// const person = {name : 'nidhi', age : 22}
// console.log(person)

// ///// accessing object data 
// console.log(person.name)
// console.log(person.age)


// const person = {
//     name : 'nidhi', 
//     age : 22,
//     hobbies : ['singing', 'walking',' music']
// }
// console.log(person.hobbies)
// console.log(person.hobbies[0])

// //// adding new key value pairs
// person.gender = 'female'
// console.log(person)
// console.log(person['gender']) // keys are string bydefault

// person['height'] = 125
// console.log(person)

/////    DOT VS [] //////

const person = {
    name : 'nidhi', 
    age : 22,
    'person hobbies' : ['singing', 'walking',' music']
}

// console.log(person.person hobbies)//not possiblee so
// console.log(person['person hobbies'])

////  iteration 
// for(let key in person ){
//     console.log(key)
// }
//// pass key as variable to have values 

// for (let key in person)
// {
//     // console.log(person[key])
//     console.log(key , person[key])
// }

// console.log(Object.keys(person))

//// Computed objects 
// let key = 10
// let value = "hello"
// const obj = {
//     [key] : value,
// }
// console.log(obj)

//////////////////////////// SPRED OPERATOR IN ARRAY AND OBJECT ---------------------------------

//// same as array
//// clone copy and iterate

/////   OBJECT DESTRUCTURING 

// let{name, age} = person  // declaring two variables together and getting values from object
// console.log(name)

// const users = [
//     {}
// ] object in arrau

// for(let user of users){
//     console.log(user.id)
// }


/// nested destructuring
const users = [
    {id:1,name:'nidhi'},
    {id:2,name:'shivangi'},
    {id:3,name:'kashish'}
]

const [{name},,{id}] = users;
console.log(name)
console.log(id)