const preloader = document.querySelector('.preloader');
const background = document.querySelector('.background');
window.addEventListener('load', function() {
    background.style.display = 'block';
    setTimeout(()=> {
        preloader.classList.add('preloader_hidden')
    }, 500)
});