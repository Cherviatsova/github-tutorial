/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */
//помошник при сборе данных из большой формы    Еще нужно собрать значения элементов формы



const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.log('Это сабмит формы');

    const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    });
}