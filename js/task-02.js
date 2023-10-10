const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const list = document.querySelector('#ingredients');

const createItems = arr => {
    const createli = arr.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.classList.add('item');
        return li;
    })
    list.append(...createli);
}
createItems(ingredients);