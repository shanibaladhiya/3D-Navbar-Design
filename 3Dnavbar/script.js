const toggleButton = document.querySelector('.toggle-btn');
const ul = document.querySelector('nav .navbar');
const header = document.querySelector('.header');
const footer = document.querySelector('footer .p');

toggleButton.addEventListener('click', ()=>{
    toggleButton.classList.toggle('active');
    ul.classList.toggle('active');
    header.classList.toggle('skew');
    footer.classList.toggle('active')
});