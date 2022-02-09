const items = document.getElementById('items');
const allItems = document.getElementsByClassName('item');
const item2 = document.getElementById('item2');

items.addEventListener('click', function () {
    console.log('Parent clicked.')
});

for (const item of allItems) {
    item.addEventListener('click', function () {
        console.log('Item clicked');
    });
}

item2.addEventListener('click', function () {
    console.log('2nd element clicked.');
});
