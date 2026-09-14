// a default argument if the argument is not provided

const greet = (name, greeting = 'Hello') => {
    console.log(`${greeting} ${name}`)
}

(greet('mike', 'hi'))




