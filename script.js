const darkButton = document.querySelector('#dark-mode-btn');

if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    darkButton.textContent = '日';
}

darkButton.addEventListener('click', function () {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        darkButton.textContent = '日';
    } else {
        localStorage.setItem('mode', 'light');
        darkButton.textContent = '月';
    }
});


const banner = document.querySelector('.banner');
const miniBar = document.querySelector('#mini-bar');

function checkHeader() {
    if (!banner || !miniBar) {
        return;
    }

    if (window.scrollY > banner.offsetHeight) {
        miniBar.classList.add('show');
    } else {
        miniBar.classList.remove('show');
    }
}

const revealItems = document.querySelectorAll('.reveal');

function checkReveal() {
    let screenBottom = window.innerHeight - 80;

    for (let i = 0; i < revealItems.length; i++) {
        let itemTop = revealItems[i].getBoundingClientRect().top;

        if (itemTop < screenBottom) {
            revealItems[i].classList.add('show');
        }
    }
}

window.addEventListener('scroll', function () {
    checkHeader();
    checkReveal();
});

checkHeader();
checkReveal();