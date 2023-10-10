const listItems = document.querySelectorAll('.item');
const itemsLength = listItems.length;

console.log(`Number of categories: ${itemsLength}`);

const item = listItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.innerHTML}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})