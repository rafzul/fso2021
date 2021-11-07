// Object method and "this"
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
        console.log(a+b)
    }
}

// arto.greet()
// arto.growOlder = function() {
//     this.age += 1
// }
// console.log(arto.doAddition(1,4))
// const referenceToAddition = arto.doAddition
// console.log(referenceToAddition(10,15))

// -------------------------------------------------------------------

// const referenceToGreet = arto.greet
// referenceToGreet()

// console.log(arto.age)
// console.log(arto)
// arto.growOlder()
// console.log(arto.age)

//'this' problem solve
//bind
const referenceToGreet = arto.greet.bind(arto)
referenceToGreet()
setTimeout(arto.greet.bind(arto), 1000);

//class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    greet() {
    console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbert', 22)
janja.greet()





