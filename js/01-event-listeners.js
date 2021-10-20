/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */


const targetBtn = document.querySelector('.js-target-btn');    // targetBtn - Это ссылка на элемент //
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');


// targetBtn.addEventListener('click', () => {
//     console.log("Клик");
// });

addListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('Вешаю слушателя события на целевую кнопку');

    targetBtn.addEventListener('click', onTargetBtnClick);
});
//Результат такой: при клике на одну кнопку добавляем слушателя на другую//

removeListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('Снимаю слушателя события на целевую кнопку');

    targetBtn.removeEventListener('click', onTargetBtnClick);  //Ссылка на функцию указана, это нужно втом случае если от события отписываемся//
});



//Нужно сделать одну и ту же функцию коллбэк для targetBtn и уже передаем ссылку на нее//
function onTargetBtnClick(event) {
    console.log(event);
    console.log("Клик по целевой кнопке");
}


function logMessage() {
    console.log('Клик по целевой кнопке');
};

// //===Варианты названия функций//
// function handleTargetButtonClick() {
//     console.log('Клик');
// };
// function targetButtonClickHandler() {
//     console.log('Клик');
// };
// function onTargetButtonClick() {
//     console.log('Клик');
// };