/* Menu burger toggle */

const menuBurger = document.querySelector('.burger')
const menuNav = document.querySelector('.nav')
menuBurger.addEventListener("click", function() {
    menuBurger.classList.toggle('active')
    menuNav.classList.toggle('active')
})
document.addEventListener("scroll", function() {
    menuBurger.classList.remove('active')
    menuNav.classList.remove('active')
})

/* Scroll */

var hiddenElement = document.querySelector("#Blog");
var btn = document.querySelectorAll('.btn');

function handleButtonClick() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", handleButtonClick)
}

/* Progress bar scroll */

window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/* Modal */

const pictures = document.querySelectorAll('.pictures-img')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')


pictures.forEach((el) => {
    el.addEventListener("click", (e) => {
        let path = e.currentTarget.getAttribute('data-path')
        document.querySelector(`[data-target="${path}"]`).style.display = "block"
        modal.style.display = "block"
        body.classList.add('no-scroll')
    })
})

modal.addEventListener("click", (e) => {
        modal.style.display = "none"
        body.classList.remove('no-scroll')
    })

/* Form */

const form = document.forms[0]
formInputs = document.querySelectorAll('js-input')
inputEmail = document.querySelector('js-input-email')
inputName = document.querySelector('js-input-name')

function validateEmail(email) {
    let re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateName(name) {
    let reg =/^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/
    return reg.test(Stirng(name).toLowerCase());
}

form.onsubmit = function () {
    let emailVal = inputEmail.value,
        nameVal = inputName.value
        emptyInputs = array.from(fromInputs).filter(input => input.value === '')

    formInputs.forEach(function(input){
        if(input.value === '') {
            input.classList.add('error')
        }
        else {
            input.classList.remove('error')
        }
    })
    if(emptyInputs.length !== 0) {
        return false;
    }
    if(!validateEmail(emailVal)) {
        console.log("not valid email")
        inputEmail.classList.add('error')
        return false
    } else {
        inputEmail.classList.remove('error')
    }
    if(!validateName(name)) {
        console.log('name not valid')
        inputName.classList.add('error')
        return false
    }
}


/* Night */

let night = document.querySelector(".night")
let header = document.querySelector('.header')
let headerLogo = document.querySelector('.header__logo')
let navLinks = document.querySelectorAll('.nav__link')
night.addEventListener("click", function() {
    night.classList.toggle('white')
    header.classList.toggle('background-black')
    headerLogo.classList.toggle('white')
    for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('white')
    }
    body.classList.toggle('background-black')
    welcomeText.classList.toggle('white')
})



