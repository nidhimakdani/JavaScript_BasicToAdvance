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

//// 