const p = document.getElementById('p');
const inputText = document.getElementById('input');
const need = document.getElementById('need');
const free = document.getElementById('free');
const arrest = document.getElementById('arrest');
console.log(p);

free.onclick = function () {
    p.innerText = 'You free now. Go away.';
}

arrest.addEventListener('click', setText);
function setText(){
    p.innerText = 'Now you are in jail.';
}

need.addEventListener('click', function(){
    p.innerText = 'I need '+inputText.value;
    inputText.value = '';
});