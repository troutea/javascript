// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.
// 1.create the array
//2. loop through the array
//3  filter the even numbers
//4 create the empty array


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