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