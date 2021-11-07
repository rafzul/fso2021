// //Array

// // const t = [1, -1, 3]

// // const t2 = t.concat(5)

// // console.log(t);
// // console.log(t2);


// // x = [1, 2, 3]
// // const m1 = x.map(value => value * 2)
// // const m2 = x.map(value => '<li>' + value + '</li>')
// // console.log(m1)
// // console.log(m2)


// // const y = [1, 2, 3, 4, 5]

// // const [first, second, ...rest] = y

// // console.log(first,second)
// // console.log(rest)


// //Objects
// const object1 = {
//     name: 'Arto Hellas',
//     age: 35,
//     education: 'PhD',
// }

// const object2 = {
//     name: 'Full Stack web application development',
//     level: 'intermediate studies',
//     size: 5,
// }

// const object3 = {
//     name: {
//         first: 'Rafi',
//         last: 'Zulfahmi',
//     },
//     grades: [2,3,5,3],
//     department: 'Stanford University',
// }

// console.log(object1.name)
// const fieldName = 'age'
// console.log(object1[fieldName])


// object1.address = 'Helsinski'
// object1['secret number'] = 12341

// //method for object

// const calculations =  {
//     foo: function() {

//     }
// }


// object1['calculations'] = calculations
// console.log(object1)





// //constructor object

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }


// let mycar = new Car('Eagle', 'abc', 1993)
// console.log(mycar)







//Functions for
const sum = (p1,p2) => {
    console.log(p1)
    console.log('ditambah ' + p2)
    return p1+p2
}

const result = sum(1,5)
console.log('hasilnya adalah ' + result)


// const square = p => {
//     console.log(p)
//     return p*p
// }

const square = p => p*p
console.log(square(2))

const q = [1,2,3]
const qSquared = q.map(p => p*p)

console.log(qSquared)

// function classic way

function product(a,b) {
    return a * b
}

const result2 = product(2,6);
console.log(result2)

const average = function(a,b) {
    return (a + b) / 2;
}

const result3 = average(2,6)
console.log(result3)
// calculate

