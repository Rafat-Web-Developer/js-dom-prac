// //--System 2--// 
function make_green(){
    document.body.style.backgroundColor = 'green';
}

// //--System 3--// 
const red = document.getElementById('red');
red.onclick = function make(){
    document.body.style.backgroundColor='red';
};

// //--System 4 (anonymous function)--// 
const yellow = document.getElementById('yellow');
yellow.onclick = function (){
    document.body.style.backgroundColor='yellow';
};

// //--System 5--// 
const salmon = document.getElementById('salmon');
salmon.addEventListener('click', make_salmon);
function make_salmon (){
    document.body.style.backgroundColor='salmon';
}

// //--System 6--// 
const cyan = document.getElementById('cyan');
cyan.addEventListener('click', function (){
    document.body.style.backgroundColor = 'cyan';
});