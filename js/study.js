    // let username;
    // console.log(typeof username);

    // let inputValue = null;
    // console.log(typeof inputValue);

    // const message = 'JavaScript is awesome';
    // console.log(message);

// const username = 'Mango';
// console.log('Username is', username);


// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false


// const valueA = '5';
// console.log(Number(valueA))
// console.log(typeof Number(valueA)) //number
//     console.log(typeof(valueA))    //string


// console.log((0.17 + 1.14).toFixed(2));

// console.log(Math.max(20, 50, 15, 2))


//Шаблонные строки//
// const guestName = 'Mango';
// const roomNumber = 20;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}`;
// console.log(greeting);

// const message = "Welcome to Bahamas!";
// console.log(message.length)

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message);


// const BRAND_NAME = "SAMSUNG";
// const userInput = 'SamSUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput)
// console.log(normalizedToUpperCaseInput)
// console.log(normalizedToUpperCaseInput === BRAND_NAME)

// const jsFileName = 'JavaScript'
// console.log(jsFileName.endsWith('ip'))
// console.log(jsFileName.endsWith('ipt'))

// const jsFileName = "script.js";
// const minifiedJavaScriptName = jsFileName.replace('js', 'mini');
// console.log(minifiedJavaScriptName)

// let cost = 0;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// }
// console.log(cost);


// let cost;
// const subscription = 'free';

// if (subscription === 'pro') {
//     cost = 100;
// } else {
//     cost = 0;
// }
// console.log(cost)

// let cost;
// const subscription = 'premium'

// if (subscription === 'free') {
//     cost = 0;
// } else if (subscription === 'pro') {
//     cost = 100;
// } else if (subscription === 'premium') {
//     cost = 500;
// } else {
//     console.log("Invalid subscription type")
// }
// console.log(cost)

// let type;
// const age = 20;

// if (age > 18) {
//     type = "adult"
// } else {
//     type = 'child'
// }
// console.log(type);

// const age = 20;
// const type = age > 18 ? 'adult' : 'child';
// console.log(type)



// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber);

// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber)



// let cost;
// const subscription = 'premium';

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;
    
//     case 'pro':
//         cost = 100;
//         break;
//     case 'premium':
//         cost = 500;
//         break;
//     default:
//         console.log("Invalid subscription type");
// }
// console.log(cost)

// let counter = 0;
// while (counter < 10) {
//     console.log('counter', counter);
//     counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//     clientCounter += 1;
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1){
//     sum += i;
// }
// console.log(sum);

// for (let i = 0; i <= 5; i += 1){
//     console.log(i)
//     if (i === 3) {
//         console.log('Find a number, прерываем цикл')
//         break;
//     }
// }
// console.log('Лог после цикла');

// const number = 10;
// for (let i = 0; i <= number; i += 1){
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log("Нечетные i", i);
// }


//   МАССИВЫ    //

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]



// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);             // 2
// console.log(clients[lastElementIndex]);   // Ajax


// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1){
//     console.log(clients[i]);                     //"Mango", "Ajax", "Poly" //индекс это значние счётчика цикла
//                                                             //  от 0 и до последнего индекса массива
// }


// const clients = ["Mango", "Ajax", "Poly"];
// for (const client of clients) {
//     console.log(client);                 ///"Mango", "Ajax", "Poly"
// }

// const string = "javascript";
// for (const character of string) {
//     console.log(character);                     //j a v a s c r i p t//
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
//     message = "Клиента с таким именем нету в базе данных!";
// }
// console.log(message);

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клиента с таким именем нету в базе данных!";

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = message = "Клиент с таким именем есть в базе данных!";
//         break;
//     }
//     console.log(message);
// }


// Используем цикл для вывода только чисел больше определенного значения.

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < threshold) {
//         continue;   
//     }
    // console.log(`Число больше чем ${threshold}: ${numbers[i]}`)            / 18, 29, 34
// }


// const name = 'Mango Tango'
// console.log(name.split(' '));


// const message = "JavaScript это интересно";
// console.log(message.split(' '));

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join('-'))        //"JavaScript-это-интересно"


// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Ajax"));            //1//

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes('Ajax'));       //true
// console.log(clients.includes('July'));          //false


// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = 'cherry';

// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//     console.log(`${fruit} is a red fruit`);
// }

// const numbers = [];
// numbers.push(3);
// console.log(numbers);

// numbers.push(5);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop());
// console.log(numbers.pop());
// console.log(numbers);

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-1));               //Kiwi




// ФУНКЦИИ//

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// let result = multiply(2, 10, 3)
// console.log(result);

// result = multiply(10, 5, 10);
// console.log(result);


// function multiply() {
//     let total = 1;
//     for (const argument of arguments) {
//         total *= argument;
//     }
//     return total;
// }
// console.log(multiply(1, 2, 3));
// console.log(multiply(2, 5, 20));

// Создадим функцию, которая обрабатывает снятие денег с личного счета в банке.Она получает сумму для снятия
//  и текущий баланс счета, после чего, в зависимости от условия, выполняет тот или иной блок кода.

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведения операции введите сумму больше нуля")
//     } else if (amount > balance) {
//         console.log("Недостаточно средств на счету");
//     } else {
//         console.log("Операция снятия средств проведена успешно");
//     }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"      



// // ✅ Работает вызов до объявления
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // ✅ Работает вызов после объявления
// multiply(4, 5, 6);



//       ОБЪЕКТЫ           //

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf("The Mist");
//         this.books.splice(1, 1); 
//     },
// }


// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// let total = 0;
// for (const value of values) {
//     total += value;
// }
// console.log(total);

// const bookNames = [];
// for (const book of books) {
//     bookNames.push(book.title)
// }