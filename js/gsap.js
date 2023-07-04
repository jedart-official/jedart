const aboutSection = document.querySelector('.about');
const servicesSection = document.querySelector('.services');
const skillsSection = document.querySelector('.skills');
const skillsItems = document.querySelectorAll('.skills__item');
const examplesSection = document.querySelector('.examples');
const examplesItems = document.querySelectorAll('.examples__item');
const contactsSection = document.querySelector('.contacts');
function isVisible(obj) {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}


function aboutAnimation() {
    gsap.fromTo('.about__name', {x: 2000}, {x: 0, duration: 1})
    gsap.fromTo('.about__role', {x: 2000}, {x: 0, duration: 1.5})
    typeWriter();
}

function servicesAnimation() {
    gsap.fromTo('.services__card-1', {x: 2000}, {x: 0, duration: 0.5})
    gsap.fromTo('.services__card-2', {x: -2000}, {x: 0, delay: 0.5, duration: 0.5})
    gsap.fromTo('.services__card-3', {x: 2000}, {x: 0, delay: 1, duration: 0.5})
}

function skillsAnimation() {
    gsap.fromTo('.skills__title', {x: 2000}, {x: 0, duration: 1})
    skillsItems.forEach((skillsItem, index) => {
        setTimeout(() => {
            gsap.fromTo(skillsItem, {opacity: 0}, {opacity: 1, duration: 0.5, delay: 0.1 * index})
        }, 20 * index)
    })
}

function examplesAnimation() {
    gsap.fromTo('.examples__title', {x: 2000}, {x: 0, duration: 1})
    examplesItems.forEach((exampleItem, index) => {
        setTimeout(() => {
            gsap.fromTo(exampleItem, {opacity: 0}, {opacity: 1, duration: 0.5, delay: 0.1 * index})
        }, 20 * index)
    })
}

function contactAnimation(){
    gsap.fromTo('.contacts__card', {x: 2000}, {x: 0, duration: 1})
    gsap.fromTo('.contacts__photo', {x: -4000}, {x: 0, duration: 1})
}


const txt = "Добро пожаловать! Меня зовут Артем и я web-разработчик из Казахстана. Моя цель - это помочь найти решения ваших проблем и предоставить качественный и достойный результат."; /* The text */
const speed = 15; /* The speed/duration of the effect in milliseconds */
const obj = document.querySelector(".about__description");

function typeWriter() {
    obj.innerHTML = '';
    for (let i = 0; i < txt.length; i++) {
        setTimeout(() => {
            obj.innerHTML += txt.charAt(i);
        }, speed * i)
    }
}

function runAnimation() {
    if (isVisible(aboutSection)) aboutAnimation();
    if (isVisible(servicesSection)) servicesAnimation();
    if (isVisible(skillsSection)) skillsAnimation();
    if (isVisible(examplesSection)) examplesAnimation();
    if (isVisible(contactsSection)) contactAnimation();
}


