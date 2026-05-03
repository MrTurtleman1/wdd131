

let selectElem = document.querySelector('#webdevlist');
let pageContent = document.querySelector('body');
let image = document.querySelector('img');

selectElem.addEventListener('change', changeTheme)

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        pageContent.classList.add('dark');
        image.setAttribute('src', 'byui-logo-white.png')
    } else {
        pageContent.classList.remove('dark');
        image.setAttribute('src', 'byui-logo-blue.webp')
    }
}