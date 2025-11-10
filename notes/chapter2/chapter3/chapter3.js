
// let example_sentence = 'this_is_a_string'

// let string_length = example_sentence.length

// console.log('Value at the end of the string = ', example_sentence[string_length - 1])

// //let combined_string = 'hello world' + ' ' + example_sentence[5]

// let combined_string = '3' + 5

// console.log(combined_string - 6)

// const contains_the_letter_a = example_sentence.slice(-1)
// console.log(contains_the_letter_a)


// let simple_array = ['james', 'is', 'cool']
// console.log(simple_array.reverse())

console.log("hello world")

let simple_array = [1,2,3,4,5]

// let simple_array = [[1,2], [3,4]]

// for (let i = 0; i < simple_array.length; i++) {
//     let subArray = simple_array[i]
//     for (let j = 0; j < subArray.length; j++) {
//         console.log(i, j)
//     }
// }

let subArray = simple_array.slice(0,3)
console.log(subArray)

//dict and objetcs
8
const bio = {
    name: 'james',
    age: 27,
    hobbies_or_interests: ['gym', 'coding', 'reading']
}

let name = bio['name']

console.log(name)

function counter() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
} 

let increment = counter()

increment()

const brokenObject = {
    word: 'nice'
}

function problematicCodeBlock() {

    try {
        const sub_object = brokenobject.hello.world

    } catch (error) {

    }
    //const sub_object = brokenobject.hello.world

    console.log("code")
}


problematicCodeBlock()
