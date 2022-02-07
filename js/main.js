
// //--Body secelctor--//
// document.body.style.background = 'salmon';
const body = document.body;
body.style.background = 'salmon';




// //--Tag secelctor--//
const allh1 = document.getElementsByTagName('h1');
for (const h1 of allh1) {
    h1.style.color = 'teal';  
}

const allh2 = document.getElementsByTagName('h2');
for (const h2 of allh2) {
    h2.style.color = 'white';
}
