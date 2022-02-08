// //--Create Element--//
const p = document.createElement('p');

// //--selectors--//
const btn = document.getElementById('btn');
const textArea = document.getElementById('commentText');
const comments = document.getElementById('comments');

// //--get data--//
let valueOfTextArea = '';
textArea.addEventListener('keyup', function () {
    valueOfTextArea = textArea.value;
});


btn.addEventListener('click', function () {
    // //--append elements--//
    p.innerText = valueOfTextArea;
    comments.appendChild(p);
    textArea.value = '';
});