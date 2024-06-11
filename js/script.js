// Pre Loader
var loader = document.getElementById("loader");
function preloader() {
  loader.style.display = 'none';
}


function whatsapp() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var timing = document.getElementById("timing").value;
  var workday = document.getElementById("workday").value;

  if(document.getElementById('weekly').checked) {
    var service = "I Need Carlift on Weekly Basis";
  }else if(document.getElementById('monthly').checked) {
    var service = "I Need Carlift on Monthly Basis";
  }

  if(document.getElementById('male').checked) {
    var gender = "I am Male";
  }else if(document.getElementById('female').checked) {
    var gender = "I am Female";
  }

  var url = "https://wa.me/971529522395?text="
    + "*From:*" + from + "%0a"
    + "*To:*" + to + "%0a"
    + "*Timing:*" + timing + "%0a"
    + "*Gender:*" + gender + "%0a"
    + "*workday:* " + workday + "%0a" 
    + "*Service:* " + service;

  window.open(url, "_blank").focus;
}


// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  responsive: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Nav open close
const body = document.querySelector('body'),
  navMenu = body.querySelector('.menu-content'),
  navOpenBtn = body.querySelector('.navOpen-btn'),
  navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
  } else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }


  // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  })
})


// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
})

sr.reveal(`.section-title, .heading , .row ,.card ,.section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, { interval: 100, })

sr.reveal(`.about-imageContent, .menu-items, .form-img, .about-imageContent `, { origin: 'left' })
sr.reveal(`.about-details, .time-table, .form-item, .about-details `, { origin: 'right' })