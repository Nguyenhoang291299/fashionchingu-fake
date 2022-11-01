const formSubmit = document.querySelector(".form-submit");
const formSelector = {}
function getValueForm() {

    let formElement = document.querySelector("form")
    
    if (formElement) {
        let inputs = formElement.querySelectorAll(".form-control")
        inputs.forEach(input => {
            input.addEventListener('change', (e)=> {
                let valueForm = e.target.value
                formSelector[input.name] = valueForm
            })
        });
    }   
}
getValueForm(formSelector)
// submit value
formSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(formSelector))
    alert("chúc mừng bạn đã đăng ký thành công!")
})