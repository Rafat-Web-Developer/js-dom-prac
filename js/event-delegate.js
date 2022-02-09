// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function () {
//         document.getElementById('items').removeChild(item);
//     });
// }

document.getElementById('items').addEventListener('click', function (event){
    event.target.parentNode.removeChild(event.target);
})

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'New Item';
    document.getElementById('items').appendChild(li);
});