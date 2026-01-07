//oop

const me = {
    name: 'james',
    age: 27
}

class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() 
    {
        console.log("hello my name is  ", this.name)
    }
}




const you = new Person('rufus', 24)
const them = new Person('doloris', 31)

console.log(you)
console.log(them)
console.log(them.greet())

class Gamer extends Person {

constructor(name,age,videogame) {
    super(name,age)
    this.videogame = videogame
}

}

const nerdyGuy = new Gamer('harold', 31, 'pokemon')
nerdyGuy.videogame = 'world of warcraft'
console.log(nerdyGuy)


class MyClass {
    constructor(name) {
        this._name = name
    }

    get name() {
           return this._name
    }

    set name(value) {
         this._name = value
    }
}

const obj = new MyClass('Lucy')
console.log(obj.name)

obj.name = 'gregothy'

console.log(obj.name)