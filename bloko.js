const btnToUp = document.querySelector('button.back-to-top');

btnToUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function ScrollingUp() {
    const scroll = document.body.scrollTop
    const scrollEL = document.btnToUp.scrollTop
    if (scroll > 20 || scrollEL > 20) {
        btnToUp.style.display = 'block'
    } else {
        btnToUp.style.display = 'none'
    }
}

window.onscroll = function() {ScrollingUp};