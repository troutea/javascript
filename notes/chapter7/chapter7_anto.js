
// arrow functions

const myFunction = (input) => {
    console.log('Executed function')
}


myFunction()
//Ternary operator ?

let friends = ['Janice', 'gregothy' , 'janice']

let isJaniceFriend= friends.includes('janice') ? true : false
console.log(isJaniceFriend)



//object destructuring

let person = {
    name: 'james',
    age: 27
}

const {name: person_name, age} = person
console.log(person_name,age)

let oldArray = [4,5]

let [value1, value2] = oldArray
console.log(value1)


//template literal string

let my_name = 'james'
console.log(`hello my name is ${my_name}`)


//short circuits


//map
let my_cool_array = [8, 3, 93, 3, 123, 2, 34, 5, 6, 6]

my_cool_array.forEach((current_value, current_index) => {
    console.log(`The current value is: ${current_value} & the current index is ${current_index}`)
})
 let my_new_array = my_cool_array.map((current_value, current_index) => {
     return current_value * 2
 })
   // console.log(my_new_array)


   //filter


let filtered_array = my_cool_array.filter((curr, curr_index) => {
    let is_even = curr % 2 === 0
    return !is_even
})


console.log(filtered_array)


