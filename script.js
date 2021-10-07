const navBar = document.querySelector(".nav-bar");
        
const bullets = document.querySelectorAll('.bullet');
const imgSlides = document.querySelectorAll('.colection-wrap__img-spec');



bullets.forEach((bullet, index) =>{
    bullet.onclick = function(){
        const imgSlide = imgSlides[index];
        const bulletActiveClicked = document.querySelector('.bullet.active')
        const imgSlideActiveClicked = document.querySelector('.colection-wrap__img-spec.active')
        imgSlideActiveClicked.classList.remove('active');
        imgSlide.classList.add('active');
        bulletActiveClicked.classList.remove('active');
        bullet.classList.add('active');
    }
})

function openNav(){
    navBar.style.transform = "translateX(0)";
}

function closeNav(){
    navBar.style.transform = "translateX(100%)";
}