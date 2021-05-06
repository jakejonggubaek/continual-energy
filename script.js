const valueContainer = document.querySelectorAll('.value-container');
const valueContents = document.querySelectorAll('.value-content');
const valueImage = document.querySelectorAll('.value-image');
const valueTitle = document.querySelectorAll('.value-title');
const loginBtn = document.querySelector('.login-form-open');
const loginForm = document.querySelector('.login-form');
const closeBtn = document.querySelector('.close-button');

loginBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'visible';
});

closeBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'hidden';
});


const toggleItems = (index) => {
    valueImage[index].classList.toggle("hidden");
    valueTitle[index].classList.toggle("hidden");
    valueContents[index].classList.toggle('hidden');
}

valueContainer.forEach((container, index)=>{
    container.addEventListener('click', () => {toggleItems(index);});
});




