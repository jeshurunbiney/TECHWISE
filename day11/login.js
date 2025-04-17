// const loginForm = document.getElementById('loginForm')
// console.log(loginForm)

const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const passwordInput = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');

console.log(emailInput);
console.log(emailError);
console.log(passwordInput);
console.log(togglePassword);

emailInput.addEventListener('input', ()=> {
    console.log(emailInput.value);

    if (!emailRegex.test(emailInput.value)) {
        emailError.classList.remove('hidden');
    } else {
        emailError.classList.add('hidden');
    } 
})

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type');
    console.log(type)
    const newType = type === "password" ? "text" : "password";
    passwordInput.setAttribute('type',newType);
})

const loginForm = document.querySelector('#loininForm');

loginForm.addEventListener('submit', (e) => { 
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(email, password);
})