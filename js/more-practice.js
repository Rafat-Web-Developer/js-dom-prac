const deleteText = document.getElementById('deleteText');
const deleteBtn = document.getElementById('deleteBtn');
const deleteConfirmCheckText = document.getElementById('deleteConfirmCheckText');


deleteBtn.addEventListener('click', function () {
    deleteText.style.display = 'none';
});

deleteConfirmCheckText.addEventListener('focus', function () {
    document.body.style.backgroundColor = 'coral';
});

deleteConfirmCheckText.addEventListener('blur', function () {
    document.body.style.backgroundColor = 'white';
});

deleteConfirmCheckText.addEventListener('keyup', function (event) {
    if(event.target.value == 'delete'){
        document.getElementById('deleteBtn').removeAttribute('disabled');
        document.body.style.backgroundColor = 'green';
    }else{
        document.getElementById('deleteBtn').setAttribute('disabled', true);
        document.body.style.backgroundColor = 'coral';
    }
});


