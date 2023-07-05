const preloader = document.querySelector('.preloader')
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=> {
        preloader.classList.add('preloader_hidden')
    }, 1000)
})