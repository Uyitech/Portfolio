// Dark and Light Mode
const switchElement = document.getElementById("theme-mode")

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('light')
})


$(function () {
    $(document).scroll(function () {
        var $nav = $("#navBar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > 30);
    });
});


// AUTOTYPE
const typed = new Typed(".color", {
    strings: ["Front-end Developer", "UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});


// Nav Active Menu
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


// Link Active
const linkWork = document.querySelectorAll('.filter')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener("click", activeWork))


// Animation
AOS.init();

AOS.init({
    // Settings 
    offset: 170,
    delay: 100,
    duration: 1600,
    easing: 'ease',
    once: true,
    mirror: false,
});


// Preloader
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 200);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}


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

// Contact form
function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
        jQuery.ajax({
            url: "../../contact.php",
            data: 'name=' + $("#name").val() + '&email=' +
                $("#email").val() + '&subject=' +
                $("#subject").val() + '&message=' +
                $(message).val(),
            type: "POST",
            success: function (data) {
                $("#mail-status").show(1000, function () {
                    $("#mail-status").fadeOut(3000);
                }
                );
                document.getElementById("contact-form").reset();
                return false;
            },
            error: function () { }
        });
    }
}

function validateContact() {
    var valid = true;
    if (!$("#name").val()) {
        $("#name").css('background-color', 'var(--contact-input)');
        valid = false;
    }
    if (!$("#email").val()) {
        $("#email").css('background-color', 'var(--contact-input)');
        valid = false;
    }
    if (!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email").css('background-color', 'var(--contact-input)');
        valid = false;
    }
    if (!$("#subject").val()) {
        // $("#subject-info").html("(required)");
        $("#subject").css('background-color', 'var(--contact-input)');
        valid = false;
    }
    if (!$("#message").val()) {
        $("#message").css('background-color', 'var(--contact-input)');
        valid = false;
    }
    return valid;
}