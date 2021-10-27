const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];


/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */


const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};

//Прослушать изменения фильтра//
refs.input.addEventListener('input', _.throttle(onFilterChange, 3000));


const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);



//Рендерим разметку эл-в списка//

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`)
        .join('');
};


function onFilterChange(event) {
    const filter = event.target.value;

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter));

    const listItemsMarkup = createListItemsMarkup(filteredItems);
    console.log(filteredItems)

   populateList(listItemsMarkup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}


