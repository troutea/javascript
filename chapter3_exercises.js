// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
// 1.create the array
//2. loop through the array
//3  filter the even numbers
//4 create the empty array

console.log("running exercise 1")
  let integers = [1,2,3,4,5,6,7,8,9,10]
let new_array = []

    for (let i = 0; i < integers.length; i++) {
        if (i % 2 === 0) {
            console.log(i);
            new_array.push(integers[i]);
            console.log(new_array)
            //continue
        }
     //new_array.push[i]
    }
//console.log(new_array[i])

//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
console.log("running exercise 2")
const names_and_ages = [
    {name: "james", age: 27 },
    {name: "lucy", age: 31 },
    {name: "juan", age: 102}
]

function findTheOldestPerson(arr) {
  console.log("calling the oldest person");
  let oldest_person = arr[0];
  for(let i = 0; i < names_and_ages.length; i++) {
    //console.log(arr[i])
    let new_person = arr[i]
    if (new_person['age'] > oldest_person.age)
    {
        oldest_person = new_person
    }
  }
  return oldest_person


}


let found_oldest_person = findTheOldestPerson(names_and_ages);
console.log(found_oldest_person)

console.log("running exercise 3")
// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
//create array with the strings
//create a new empty array
//loop through the array
//pust the converted integers to the new array

let arr_of_strings = ['1', '2', '3', '4', '5', '6']
let array_of_ints = []

for (let i = 0; i < arr_of_strings.length; i++) 
{
  let converted_string_value = parseInt(arr_of_strings[i]);
  
  array_of_ints.push(converted_string_value)
  
}

console.log(array_of_ints)


// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
//create the array of objects
//use the sort function 
console.log("running exercise 4")
let array_of_objects = [
  {price: 4.2},
  {price: 8.3},
  {price: 2.2}
]

array_of_objects.sort(function(a,b){
  //console.log(a)
  return b.price - a.price
})
console.log(array_of_objects)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
//1.Create the array
//2 Create the functionand pass in the array.
//4 get the length of the array
//3 slice the first and last  the first element of the array and the last element.

let demo_array = [1,2,3,4,5,6];

function trimArray(arr) {
console.log("calling the trim array function")
let lengthOfArray = arr.length;
const trimmedArray = arr.slice(1,lengthOfArray - 1)

return trimmedArray

}

console.log("running exercise 5")
console.log(trimArray(demo_array))



// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
// - Creat a dict with the key value pairs 
// - set a sum to zero
// - loop through the object multiply the quantity by the price  

const shopping_list = {
  'cheese': {
    quantity : 4,
    price :8
  },
  'milk': {
    quantity : 10,
    price : 2
  }
}

function sumProducts(obj) {

  const object_keys = Object.keys(obj);
  let sum = 0;
  //console.log(object_keys);
  for (let i = 0; i < object_keys.length; i++) {
   // console.log(object_keys[i]);
    let current_key = object_keys[i];
    //console.log(current_key);
    const key_data = shopping_list[current_key];
    console.log(key_data);
    let product_total = key_data.price * key_data.quantity;

    sum = sum + product_total;


  }
  return sum

  //console.log("inside the som of the products function")
  //console.log(obj.cheese.quantity)
  
}
console.log("running exercise 6")
console.log(sumProducts(shopping_list))


//7. // 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.
//Steps 
//create the object
// assign a variable to object keys
//convert it into a list

console.log("running exercise 7")

let friend = {
  'rupert' : {
    hobbies: ['gym', 'reading', 'mathematics']
  }
}

function Deepclone(obj) {

  let new_object = {}

  let object_keys = Object.keys(obj)
  console.log(object_keys)

  for (let i =0; i < object_keys.length; i++){
    let current_key = object_keys[i]
    new_object[current_key] = obj[current_key]
  }
   return new_object
}

console.log("running example 7")
let new_friends = Deepclone(friend)

friend.james = {
  hobbies: ['sleep']
}

console.log(new_friends)
console.log(friend)



 // 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

 console.log("running exercise 8")

 //create the object

 let student = {
     
  chemistry: {
    grade: 9
  },
  physics:{
    grade:7
  },
  maths: {
    grade: 1
  },
  }

//create the for loop 

function findAverageGrade(obj){

let sum = 0
let number_of_subjects = 0
let list_of_subjects = Object.keys(obj)
console.log(list_of_subjects)
 for( let i = 0; i < list_of_subjects.length; i++ ) {
      let current_key = list_of_subjects[i]
      let subject_grade = student[current_key].grade
      sum = sum + subject_grade
      number_of_subjects++
 }

 let average_grade = sum / number_of_subjects
 return average_grade

}
// main program
console.log(findAverageGrade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.


console.log("running exercise 9")

function inception() 
{
let number_of_invocations = 0;

return function() {
  number_of_invocations++
  console.log(number_of_invocations)
}
}

const incrementer = inception()

incrementer()
incrementer()


// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

//create the array of objects
// Create the objets with a date in mind
// sort the array

let arr = [ 
    {subject: 'maths', grade: 10},
     {subject: 'spanish', grade: 2},
    {subject: 'literature', grade: 6}
  ]

  function sortedByGrade(arr) {

    let sorted_array = arr.sort(function (a, b) {
      return a.grade - b.grade
    } );
    console.log(sorted_array)

    return sorted_array

  }

  console.log(sortedByGrade(arr))

  // 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.
  //create the array of strings
  // create another array with the shoretend length
  // loop through the array and get the length of each string

  console.log("running exercise 11")


  let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

  

  function filterShortStrings(arr) {
    let new_array_of_long_strings = []

    for (let i = 0; i < arr.length; i++) {
      let current_string = arr[i]
      if (current_string.length > 5) {
        new_array_of_long_strings.push(current_string)
      }
    }
     return new_array_of_long_strings
  }
  console.log(filterShortStrings(array_of_short_strings))