import products from "./data/produts.js";



// Создаём карточку продукта
//  В классе продукта может быть product--on-sale product--not-available

// const products = {
//     name: 'Сервоприводы',
//     description:
//       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//     price: 2000,
//     available: true,
//     onSale: true,
// }
  
 /*
// <article class="product">
//   <h2 class="product__name">Название</h2>
//   <p class="product__descr">Описание</p>
//   <p product__pridct>Цена: 1111 кредитов</p>
// </article>
// */

// const productEl = document.createElement('acticle');
// productEl.classList.add('products');

// const nameEl = document.createElement('h2');
// nameEl.textContent = products.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = products.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${products.price} кредитов`;
// priceEl.classList.add('product__price');




// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);


console.log(products)



//Пишем функцию, которая получает один объект и из этого объекта создает одну карточку продукта//

const makeProductCard = 
    ({ name, description, price }) => {
        const productEl = document.createElement('acticle');
        productEl.classList.add('product');

        const nameEl = document.createElement('h2');
        nameEl.textContent = name;
        nameEl.classList.add('product__name');

        const descrEl = document.createElement('p');
        descrEl.textContent = description;
        descrEl.classList.add('product__descr');

        const priceEl = document.createElement('p');
        priceEl.textContent = `Цена: ${price} кредитов`;
        priceEl.classList.add('product__price');
    
        productEl.append(nameEl, descrEl, priceEl);

        return productEl;
    };
console.log(makeProductCard(products[0]))
    
// Эта функция создает шаблон разметки для одной карточки//

//Теперь далаем много карточек//

const elements = products.map(makeProductCard);
console.log(elements);

const productsContainerEl = document.querySelector('.js-products');

productsContainerEl.append(...elements);