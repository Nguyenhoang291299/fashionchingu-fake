const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password2');
const form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement; // tra ve phan tu duoc chi dinh cua input
    let small = parent.querySelector('small');
    parent.classList.add('.error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('.error');
    small.innerText = '';
}

// kiem tra cac o bi de trong
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'ban chua dien vao o nay');
            isEmptyError = true;
        } else {
            showSuccess(input);
        }
        return isEmptyError;
    });
}

function checkEmail(input) {
    const regexEmail =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'email invalid');
    }
    return regexEmail.test(input.value)
}
form.addEventListener('submit', (e) => {
    e.preventDefault(); // moi khi trang dc submit thi se ko bi reload
    checkEmptyError([username, email, password, confirmPassword]);
})
    
var lengthOfLastWord = function(s) {
    s = "luffy is still joyboy   ";
    a = s.trim()
    a.slice(-1)
    console.log(a.slice(-1));
};
lengthOfLastWord();