// scripts.js
window.addEventListener('scroll', () => {
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
    const row3 = document.getElementById('row3');
    const row4 = document.getElementById('row4');

    if (window.scrollY > 0) {
        row1.classList.add('scroll-right');
        row2.classList.add('scroll-left');
        row3.classList.add('scroll-right');
        row4.classList.add('scroll-left');
    } else {
        row1.classList.remove('scroll-right');
        row2.classList.remove('scroll-left');
        row3.classList.remove('scroll-right');
        row4.classList.remove('scroll-left');
    }
});
