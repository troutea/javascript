


console.log("hello world")

let friends = {
    james: "is super cool",
    lucy: "isnt so cool",
    number_of_eggs: 3
}

console.log(friends)

function myFirstFunction(value, secondValue) {
    console.log(value * secondValue)
}


myFirstFunction(3,5)


let condition1 = true
let condition2 = false

console.log(condition1 || condition2)

if (condition1) {

    console.log("hi mom")
}

function addStrings(string1, string2) {

    if (!string1 || string2) {
        return
    }
    let concatString = string1 + ' ' + string2
    console.log(concatString)

}

addStrings("hello", "mum")

let a = 5
let b = 6
console.log(a == b)
