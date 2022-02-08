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