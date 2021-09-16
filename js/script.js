// const hours = 14;
// const minutes = 26;

// if (minutes === 0) {
//     console.log(`${hours}ч.`);
// }
// else {
//     console.log(`${hours}ч. ${minutes}мин.`); }



//  * Напиши скрипт, который выводит в консоль строку "Это положительное число",
// * если в подсказке пользователь ввел число больше нуля. Если был введен ноль,
// * выводи в консоль строку `" Это ноль "`. Если передали отрицательное число,
//  * в консоли должна быть число строка `" Это отрицательное "`.
//  * /

// let userInput = prompt('Введите число');
// userInput = Number(userInput);

// if (userInput > 0) {
//     console.log("Это положительное число");
// }
// else if (userInput === 0) {
//     console.log(" Это ноль ");
// }
// else {
//     console.log(" Это отрицательное ");
// }



// const dayUntilDeadLine = 3;

// switch (dayUntilDeadLine) {
//     case dayUntilDeadLine === 0:
//         console.log('Сегодня');
//         break;
    
//     case dayUntilDeadLine === 1:
//         console.log('Завтра');
//         break;
    
//     default:
//     console.log('Послезавтра');
// }
// console.log(dayUntilDeadLine);

//  Напиши цикл для выводит в консоль числа
//  по возрастанию от `min` до` max`, но только если число кратно 5.

// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1)
//     if (i % 5 === 0)
//     {
//     console.log(i);
// }


// const values = "8 11";

// const numbers = values.split(' ');
// console.log('Numbers', numbers);
// const result = numbers[0] * numbers[1];
// console.log(result);

// ==============================================//
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(i + 1);
//     console.log(fruits[i]);
//     console.log(`Order number ${i +1} of ${fruits[i]}`);
// }

// for (let fruit of fruits) {
//     let index = fruits.indexOf(fruit);
//     console.log(index + 1);
//     console.log(fruit);
// }

// for (let i = 0; i <fruit.length; i ++) {
// console.log («порядковый номер», i + 1);
// console.log ("элемент", fruit [i]);
//}

//================================================//

// const names = "Иаков,Уильям,Соломон,Артемида";
// const phone = "89001234567,89001112233,890055566377,890055566300";

//     const nameArrays = names.split(',');
//     const phoneArrays = phone.split(',');
//     console.log(nameArrays);
//     console.log(phoneArrays);

//     for (let i = 0; i < nameArrays.length; i += 1) {
//         console.log(`${nameArrays[i]} - ${phoneArrays[i]}`);
//     }

 //==============================================//   
    // Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = "Добро пожаловать в будущее";

// const array = string.split ("");
// const reversedArray = array.reverse ();
// const reversedString = reversedArray.join ("");
// console.log (`массив`, массив);
// console.log (`reversedArray`, reversedArray);
// console.log ("reversedString", reversedString);

// const array = string.split ("");
// console.log (`массив`, массив);

// const newArray = [];

// for (let i = array.length - 1; i> = 0; i--) {
// const word = array [i];
// newArray.push (word);
//}

//=======================//
// const numbers = values.split ("");
// console.log ("числа", числа);
// константный результат = числа [0] * числа [1];
// // const result = Number (numbers [0]) + Number (numbers [1]);
// // константный результат = + числа [0] + + числа [1];
// console.log (`результат`, результат);
//====================================//

// const numbers = [1, 17, 94, 2, 23, 37, -1];
// let min = numbers[0];

// for (let number of numbers) {
//     if (min > number) {
//         min = number;
//     }
    
// }
// console.log(min);

//==========================//
// function addLeadingZero(value) {
//     return String(value).padStart(2, 0)
// }

// function formatTime(totalMinutes) {
//     const hours = (Math.floor(totalMinutes / 60));
//     const minutes = totalMinutes % 60;
//     const doubleDigitHours = addLeadingZero(hours);
//     const doubleDigitMinutes = addLeadingZero(minutes);
    
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
    
// }

// console.log(formatTime(70));  // "01:10"

//=======================================================//








// function calcBMI(weight, height) {
    
//     const numericWeight = weight.replace(',', '.');
//     const numericHeight = height.replace(',', '.');
//     let bmi = numericWeight / numericHeight ** 2;
//     bmi = bmi.toFixed(1);
//     bmi = Number(bmi);
//     return bmi;

//     console.log(bmi.toFixed(1));
//         console.log(numericWeight, numericHeight);
//     console.log(numericHeight ** 2);
// }
// const bmi = calcBMI('100.5', '1.75');
// console.log(calcBMI('100.5', '1.75'));

//===============================//




















    // $(document).ready(function()  { 
    // 'use strict'; 
    //     console.log('script.js loaded');

        
    //     paper.install(window);
    //     paper.setup(document.getElementById('mainCanvas'));
       
    //     var tool = new Tool();
    //     var с = Shape.Circle(200, 200, 80);
    //     c.fillColor = 'green';
    //     var text = new PointText(200, 200);
        
    //     text.justification = 'center'; 
    //     text.fillColor = 'white'; 
    //     text.fontSize = 20; 
    //     text.content = 'hello world';
    //     tool.onMouseDown = function (event) {
    //         var c = Shape.Circle(event.point.x, event.point.y, 20);
    //         c.fillColor = 'green';
    //     };
            
    
    //     paper.view.draw();
    // });
    