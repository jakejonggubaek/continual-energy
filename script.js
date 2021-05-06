const valueContainer = document.querySelectorAll('.value-container');
const valueContents = document.querySelectorAll('.value-content');
const valueImage = document.querySelectorAll('.value-image');
const valueTitle = document.querySelectorAll('.value-title');
const loginBtn = document.querySelector('.login-form-open');
const loginForm = document.querySelector('.login-form');
const closeBtn = document.querySelector('.close-button');
const profileBtn = document.querySelectorAll('.profile-open-button');
const profilePopUp = document.querySelectorAll('.profile-detail-desc');
const profileCloseBtn = document.querySelectorAll('.profile-close');
const profilePage = document.querySelector('.company');
const productsContainer = document.querySelectorAll('.products-content-container');
const productsDetail = document.querySelectorAll('.products-content-detail');
const burgerMenu = document.querySelector('.burger');
const MobileMenu = document.querySelector('.mobile-nav');
const topButton = document.querySelector('.top-button');
const productsDetailLink = document.querySelectorAll('.products-content-detail-button');
const serviceLink = document.querySelectorAll('.service-detail-link');

//show&hide go-to-the top button
const screenScroll = () => {
    
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

document.addEventListener("scroll", screenScroll);

//scroll to top button - to landing page
topButton.addEventListener('click', () => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' }); // For Safari
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); // For Chrome, Firefox, IE and Opera
});

burgerMenu.addEventListener('click', () => {
    MobileMenu.style.display = 'block';
});
MobileMenu.addEventListener('click', () => {
    MobileMenu.style.display = 'none';
});

productsContainer.forEach((container, index)=>{
    container.addEventListener('mouseover', () => {
        productsDetail[index].style.zIndex = '2';
    });

    container.addEventListener('click', () => {
        productsDetail[index].style.zIndex = '2';
    });

    container.addEventListener('mouseleave', () => {
        productsDetail[index].style.zIndex = '-1';
    });
});

productsDetailLink[0].addEventListener('click', () => {
    window.open("https://continual.net/products/Continual%20ExSOP%20Brochure.pdf");
});
productsDetailLink[1].addEventListener('click', () => {
    window.open("https://continual.net/products/Continual%20MBCx%20Brochure.pdf");
});
productsDetailLink[2].addEventListener('click', () => {
    window.open("https://continual.net/products/Continual%20Box%20Brochure.pdf");
});

serviceLink.forEach((link) => {
    link.addEventListener('click', () => {
        window.open("https://continual.net/services/Continual%20Services%20Brochure.pdf");
    });
});

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

profileBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        profilePopUp[index].style.zIndex = '2';
    });
});

profileCloseBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        profilePopUp[index].style.zIndex = '-1';
    });
})




