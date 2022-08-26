// Toggle Dark and Light mode
const sun = document.getElementById("sun")

sun.onclick = function () {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        sun.src = "img/moon.png";
    } else {
        sun.src = "img/sun.png";
    }
}


//  Animation on scroll
ScrollReveal({
    distance: '70px',
    duration: 2000
});

ScrollReveal().reveal('.ani', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.pani', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.cani', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.sleft', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.sright', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.section-title', { delay: 400, origin: 'bottom' });


// AUTOTYPE
const typed = new Typed(".color", {
    strings: ["Front-end Developer", "UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});


// Nav A Menu
const li = document.querySelectorAll(".nav-item")
const sec = document.querySelectorAll("section")

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 90 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);


//  MIXITUP PORTFOLIO 
const mixerPortfolio = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
});

// Link Active Work

const linkWork = document.querySelectorAll('.filter')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')

}

linkWork.forEach(l => l.addEventListener("click", activeWork))


// // BACK TO TOP
// //Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


