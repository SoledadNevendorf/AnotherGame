/* scroll up button */

let scrollLinks = document.querySelectorAll('a');
scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let scrollUpBtn = document.getElementById("scroll-btn");

window.onscroll = function() { topFunction() };

function topFunction() {
    if (screen.width > 800) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    } else {
        scrollUpBtn.style.display = "none";
    }
}