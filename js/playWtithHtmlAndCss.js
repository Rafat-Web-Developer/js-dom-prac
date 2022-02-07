// //--common JS--//
document.body.style.backgroundColor = 'salmon';

// //--Create all elements--//
const header = document.createElement('header');
const h1 = document.createElement('h1');

// //--Set all inner text--//
h1.innerText = 'Create this page one using JS'


// //--All appends--//
header.append(h1);
document.body.append(header);


// //--Apply CSS--//
header.style.border = '3px solid black';
h1.style.textAlign = 'center';