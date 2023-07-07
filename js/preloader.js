const preloader = document.querySelector('.preloader')
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=> {
        preloader.classList.add('preloader_hidden')
        aboutAnimation();
    }, 1000)
})