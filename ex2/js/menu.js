'use strict'

let btn_active = true;

const menuMobile = document.querySelector('div.menu__mobile');
const menuToggle = document.querySelector('div.menu__toggle');

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = btn_active ? 'hidden' : 'initial';

    menuMobile.classList.toggle('on', btn_active);
    btn_active = !btn_active;
})
