const formMain = document.querySelector('.formMain');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const activePopup = document.querySelector('.loginBtn');
const iconClose = document.querySelector('.iconClose');

registerLink.addEventListener('click', ()=>{
    formMain.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    formMain.classList.remove('active');
});

activePopup.addEventListener('click', ()=>{
    formMain.classList.add('activePopup');
});

iconClose.addEventListener('click', ()=>{
    formMain.classList.remove('activePopup');
});