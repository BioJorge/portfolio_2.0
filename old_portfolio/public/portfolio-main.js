

//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//toggle icon for the config submenu
function openCloseHeaderMenu(){
    //getting the screen width
    let menuExpanded = document.getElementById('menu-expanded');
    let body = document.querySelector('body');

    //activate the menuExpanded
    menuExpanded.classList.toggle('active');

    if(body.style.overflowY == "hidden"){
        body.style.overflowY = "scroll";
    } else{
        body.style.overflowY = "hidden";
    }
}

//toggle for the light-dark mode and en-pt mode
let lightDarkToggler = document.getElementById('light-dark-toggle');
let languageToggler = document.getElementById('pt-en-toggle');
let html = document.querySelector('html');
let homeSection = document.querySelector('#home');

//toggle for the light-dark mode
function changeColorMode() {
    lightDarkToggler.classList.toggle('dark-mode');
    lightDarkToggler.classList.toggle('light-mode');
    html.classList.toggle('light-mode');

    if (html.classList.contains('light-mode')) {
        homeSection.style.backgroundImage = "url('public/images/wallpaper_light.png')";
        localStorage.setItem("mode", "light-mode");
    } else {
        homeSection.style.backgroundImage = "url('public/images/wallpaper_dark.png')";
        localStorage.setItem("mode", "dark-mode");
    }

    console.log(localStorage.getItem("mode"));
}


//toggle for the en-pt mode
// languageToggler.onclick = () =>{
//     languageToggler.classList.toggle('en-mode');
//     languageToggler.classList.toggle('pt-mode');
// }


//linking home buttons to
function scrollToContact(){
    let contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior: "smooth" });
}


// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate'); 
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


    changeSoftSkillPosition();
  }


function isScrolledIntoView(element){
    //getting element location inside the DOM
    const rect = element.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

function changeSoftSkillPosition(){
  let skills = document.querySelector('.soft-skills-grid').querySelectorAll('.grid-row');
  let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (isScrolledIntoView(document.getElementById("soft-skill")) && width > 992) {
    console.log("into view");
    Array.from(skills).forEach(element => element.classList.add('animate-skill'));
  } else if(width <= 992){
    Array.from(skills).forEach(element => element.classList.remove('animate-skill'));
  }

}


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
  
//sending email
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to avoid page refresh

        let tempVars = {
            from_name: document.getElementById('fullName').value,
            from_email: document.getElementById('email').value,
            from_number: document.getElementById('mobile').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        emailjs.send('service_ux9fd9q', 'template_1kbro0m', tempVars)
            .then(function (res) {
                window.alert('E-mail successfully sent');
            });
    });
});


verificarCookies();

function verificarCookies() {
    console.log(localStorage.getItem("mode"));
    let currentMode = localStorage.getItem("mode");

    if (currentMode === "light-mode") {
        changeColorMode(); // Set to light mode
    } else {
        localStorage.setItem("mode", "dark-mode");
    }

    console.log(localStorage.getItem("mode"));
}

function scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

var currentSlide = 0;
var dotButtons = document.getElementById('custom-buttons').querySelectorAll('.dots');

// Inicialização do Slick.js
$(document).ready(function(){
  var carousel = $('.skills-carousel');

  carousel.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false, // Remover os botões de navegação padrão
    infinite: true,
    centerMode: true,
    centerPadding: '5%',
      //adjusting the breakpoints
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  // Botão Anterior
  $('.prev-button').click(function(){
    carousel.slick('slickPrev');
    if (currentSlide === 0) {
      console.log(currentSlide);
    } else {
      currentSlide--;
      console.log(currentSlide);
    }
   
    dotButtons.forEach(element => element.classList.remove('active'));
    dotButtons[currentSlide].classList.add('active');
  });

  // Botão Próximo
  $('.next-button').click(function(){
    carousel.slick('slickNext');
    if (currentSlide === 3) {
      console.log(currentSlide);
    } else {
      currentSlide++;
      console.log(currentSlide);
    }
   
    dotButtons.forEach(element => element.classList.remove('active'));
    dotButtons[currentSlide].classList.add('active');
  });

  // Atualizar o contador de slide quando o usuário passar manualmente
  carousel.on('afterChange', function(event, slick, currentSlideIndex) {
    currentSlide = currentSlideIndex;
    console.log(currentSlide);

    dotButtons.forEach(element => element.classList.remove('active'));
    dotButtons[currentSlide].classList.add('active');
  });
});

  
  