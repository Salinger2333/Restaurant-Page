import { loadHome } from './component/home/home.js'
import { LoadContact } from './component/contact/contact.js';
import { LoadMenu } from './component/menu/menu.js';
import './style.css'

loadHome()

const btnHome = document.querySelector('#btn-home')
const btnMenu = document.querySelector('#btn-menu')
const btnContact = document.querySelector('#btn-contact')

btnHome.addEventListener('click', () => {
    document.querySelector('#content').replaceChildren()
    loadHome()
})

btnMenu.addEventListener('click', () => {
    document.querySelector('#content').replaceChildren()
    LoadMenu()
})

btnContact.addEventListener('click', () => {
    document.querySelector('#content').replaceChildren()
    LoadContact()
})
