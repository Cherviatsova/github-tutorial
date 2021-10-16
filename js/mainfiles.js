// const num = 42  // целое число
// const float = 42.42 //дробное число
// const pow = 10e3
// console.log(pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log('Min number', Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NaN) //Not a Number//
// console.log(typeof (NaN))
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))

// const stringInt = '42'
// console.log(Number.parseInt(stringInt) + 2)
// const stringFloat = 42.42
// console.log(parseFloat(stringFloat) + 2)

// console.log(0.4 + 0.2)// string
// console.log(+(0.4 + 0.2).toFixed(1)) //Number
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))//number

// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// console.log(getRandomBetween(10, 35))


//============STRINGS===============//
// const name = 'Elena'
// const age = 37

// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age > 35 ? '37' : '25'} лет`
// console.log(output)

// const name = 'Elena'
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.indexOf('l'))
// console.log(name.includes('El'))
// console.log(name.toUpperCase().endsWith('A'))
// console.log(name.repeat(3))

// const string = '     password      '
// console.log(string.trim())    //очищает пробелы trim()//

// function logPerson(s, name, age) {
//     if (age < 0) {
//        age = "Еще не родился"
//    }
// return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = "Elena"
// const personAge = 37
// const personName2 = "Max"
// const personAge2 = -10
// const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
// const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`
// console.log(output)
// console.log(output2)


//================ФУНКЦИИ================// это объекты


//Function Expression// когда создаем функцию и складываем в переменную
// const greet2 = function greet2(name){
//  console.log('Привет 2 - ', name)    
// }

// greet('Elena')  //можно обращаться до создания функции//

// greet2("Elena") //обращаться к функции только после ее создания//

// //Function Declaration// можно обращаться когда захотим       лучше всегда использовать этот метод
// function greet(name) {
//  console.log('Привет - ', name)   
// }
// console.log(typeof greet)
// console.dir(greet)

// Анонимные функции//
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {                                        //счетчик до 5//
//      clearInterval(interval)   //clearTimeout//
//     } else {
//      console.log(++counter)    
//     } 
// }, 1000)
    
//Стрелочные функции//
// function greet(name) {
//  console.log('Привет - ', name)   
// }

// const arrow = (name) => {
//   console.log('Привет - ', name)    
// }

// const arrow2 = name => console.log('Привет - ', name) 

// arrow("Elena")
// arrow2('Max')

// const pow2 = num => num ** 2
// console.log(pow2(5))

//Параметры по умолчанию//
// const sum = (a, b = a * 1) => a + b
// console.log(sum(41, 5))

// function sumAll(...all) {                        // rest - в all собирает все числа..
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result 
// }
// const res = sumAll(1, 2, 3, 4)
// console.log(res)


//Замыкания//
// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
// const logWithLastName = createMember('Elena')
// console.log(logWithLastName('Cherviatsova'))



//===============МАССИВЫ====================//
// const cars = ['BMW', 'Ford', 'Volvo', 'Mazda']
// console.log(cars)

// //Function//
// function addItemToEnd() {
    
// }
//Method
// cars.push('Forza')
// cars.unshift('Volvo')
// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(firstItem)
// console.log(lastItem)
// console.log(cars.reverse())

// const index = cars.indexOf('Ford')
// cars[index] = 'Nissan'                    //Замена по индексу//
// console.log(cars)

// const index = cars.indexOf('Volvo')
// console.log(cars[index])

//Задача 1//
// const text = "Привет, мы изучает JavaScript"
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)



// const people = [
//     { name: 'Elena', budget: 3500 },
//     { name: 'Max', budget: 2700 },
//     {name: "Alex", budget: 1500}
// ]

// let findedPerson
// for (const person of people) {
//     if (person.budget === 2700) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)


// вариант //
// const person = people.findIndex(function (person) {         // анонимная функция  //
//   return person.budget === 2700  
// }
// )

// const person = people.find(person => person.budget === 2700)          // стрелочная функция//
// console.log(person)

// console.log(people[index])

// //или другой вариант без нахождения по индексу//
// const person = people.find(function (person) {
//     return person.budget === 2700
// }
// )
// console.log(person)

// Задача 2 //
// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars)

// метод reduce//
// people.reduce(function (acc, person) { }, 0)
// acc- это аккумулятор, person - єто элемент по которому будет делаться итерация//

// В этом методе нам нужно изменить значентие аккумулятора//
// const allBudget = people
//     .filter(person => person.budget > 1500)
//     .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// }, 0)
//  console.log(allBudget)


//================== Объекты ======================//

// const person = {
//     name: 'Elena',
//     age: 37,
//     languages: ['ru', 'ua', 'en'],
//     greet() {                               // эта функция называется метод greet: function() {  }//
//     console.log('greet from person')    
//     }
// }
// console.log(person)
// console.log(person[('age')])
// person.age++
// person.languages.push('esp')
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge, languages} = person
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key', key)
//         console.log('value', person[key])
//     }
// }
// for in бежит не только по ключам самого объекта, но также может заходить в его прототипы
// поэтому в таком случае обязательно нужно использовать метод hasOwnProperty

// const keys = Object.keys(person)
// keys.forEach(key => {
//     console.log('key', key)
//     console.log('value', person[key])
// }
// )

// Другой вариант записи//
// Object.keys(person).forEach(key => {
//     console.log('key', key)
//     console.log('value', person[key])
// }
// )


// const message = "JavaScript is awesome!";
// alert(message);