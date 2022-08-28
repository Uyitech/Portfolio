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


// Animation
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 170, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1600, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them

});


// Back to Top
$(document).ready(function () {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    const updateProgress = function () {
        const scroll = $(window).scrollTop();
        const height = $(document).height() - $(window).height();
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    const offset = 50;
    const duration = 10;

    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});


// Start of Tawk.to Script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6308df1e37898912e9655e3d/1gbdaf443';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Script
