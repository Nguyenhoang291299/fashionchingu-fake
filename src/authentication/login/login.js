const inputs = document.querySelectorAll("input");
const login = document.querySelector(".btn_button");
const msgError = document.querySelectorAll("small");

const userSign = {}
function getValueLogin() {
    inputs.forEach(input => {
        input.addEventListener("change", (e)=> {
           userSign[input.id] = e.target.value
        })
    })
}
getValueLogin(userSign)
// đối chiếu với user trong localStorage
function confirmUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (userSign.username == user.username && userSign.password == user.password) {
        return alert("chúc mừng bạn đã đăng nhập thành công")
    } if (userSign.username != user.username) {
        return msgError[0].innerHTML = "username không đúng xin hãy nhập lại"
    } if (userSign.password != user.password) {
        return msgError[1].innerHTML = "password không đúng xin hãy nhập lại"
    }
}
// kiểm tra các ô để trống
function checkEmptyError () {
    inputs.forEach((input) => {
        input.onblur = () => {
            if (input.value.trim()) {
                return undefined; 
            }  else {
                console.log("vui lòng nhập trường này");
                return msgError.innerHTML = "vui lòng nhập trường này";
            }
        } 
    })
}
checkEmptyError()
login.onclick = (e) => {
    e.preventDefault()
    confirmUser(userSign)
}