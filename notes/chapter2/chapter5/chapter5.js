class Person {
 constructor(name, age) {
    this.name = name
    this.age = age
 }
   greet() {
    console.log("Hello my name is ", this.name)
   }

}

const you = new Person('james', 2)
you.greet()

console.log(you)
console.log(you.age)

class Gamer extends Person {
     constructor(name, age, videogame) {
        super(name, age)
        this.videogame = videogame
     }

}

const nerdyGuy = new Gamer('harold', 31, 'pokemon')

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

const obj = new MyClass('lucy')
console.log(obj.name)

obj.name = 'gregothy'
console.log(obj.name)

class Circle {
    constructor(radius) {
        this.radius = radius
    }

}

const new_circle = new Circle(4)
console.log(new_circle)


class Animal {

    constructor(name) {
        this.name = name
    }

}

class Dog extends Animal {
    constructor()


}