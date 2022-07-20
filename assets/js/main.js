// AUTOTYPED

var typed = new Typed(".color", {
    strings: ["Uyitech", "Evans Ewansiha"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});



// Nav A Menu
const li = document.querySelectorAll(".nav-item")
const sec = document.querySelectorAll("section")

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);



// BACK TO TOP
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
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


//  MIXITUP PORTFOLIO 
var mixerPortfolio = mixitup('.portfolio-container', {
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