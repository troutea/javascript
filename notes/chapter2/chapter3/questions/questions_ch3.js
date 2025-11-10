
let integers = [1,2,3,4,5,6,7,8,9,10]

function arrayFilter(arr) {

let new_array = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        continue
    }
    new_array.push(arr[i])
}
  return new_array
}

let filtered_array = arrayFilter(integers)
console.log(filtered_array)


const names_and_ages = [
    {name: 'james', age: 27},
    {name: 'lucy', age:31 },
    {name: 'juan', age: 102}
]

function findOldestPerson(arr) 
{
    let oldest_person = arr[0]
    for (let i = 0; i < arr.length; i++) {
        let new_person = arr[i]
        if (new_person['age'] > oldest_person.age) {
            oldest_person = new_person
        }
    }
    return oldest_person
}

let found_oldest_person = findOldestPerson(names_and_ages)
console.log(found_oldest_person)


//3. Data Transformations: Convert an array of strings containing numbers into an array
// of actual number values 

let array_of_strings = ["4", "8", "2", "10", "5"]
let new_array_of_numbers = []

for (let i = 0; i < array_of_strings.length; i++) {
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers)

//question 4

let array_of_objects = [
 {price: 4.2},
 {price: 8.3},
 {price: 2.2}

] 

array_of_objects.sort(function (a,b) {
    return b.price - a.price
})


console.log(array_of_objects)

// excercise 5

let demo_array = [0,1,2,3,4,5]

function trimArray(arr) {
    let array_length = arr.length
    const trimmed_array = arr.slice(1, array_length - 1)
    return trimmed_array

}

//demo_array = trimArray(demo_array)
console.log(trimArray(demo_array))


//question 6

let shopping_cart = {
   'cheese' : {
         quantity: 4,
         price: 8
   },
   milk: {
        quantity: 10,
        price: 4
   }
}

function sumProducts(obj) {
    let object_keys = Object.keys(obj)
    let sum = 0

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]

        const key_data = shopping_cart[current_key]
        let product_total = key_data.price * key_data.quantity
        sum = sum + product_total
    }
    return sum

}
  console.log(sumProducts(shopping_cart))

  let friend = { 
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
  }

  function deepClone(obj) {
    let new_object = obj
    return new_object
  }
  let new_friends = deepClone(friend)
  console.log(new_friends)

  let student = {
    chemistry: {grade: 9},
    physics: {grade: 7}
  }

  function findAverageGrade(obj) {
     let sum = 0;
     let number_of_subjects = 0

     let list_of_subjects = Object.keys(obj)

     for (let i = 0; i < list_of_subjects.length; i++) {
        let current_key = list_of_subjects[i]
        let subject_grade = student[current_key].grade
        sum = sum + subject_grade
        number_of_subjects++
     }

     let average_grade = sum / number_of_subjects
     return average_grade

  }

  console.log(findAverageGrade(student))


  // 9
function inception() {
    let number_of_invocations = 0

    return function() {
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = inception()
incrementer()
incrementer()
incrementer()


//10
let dates_array = [
    {subject: 'maths', grade: 10},
    {subject: 'spanish', grade: 2},
    {subject: 'literature', grade: 6}
]