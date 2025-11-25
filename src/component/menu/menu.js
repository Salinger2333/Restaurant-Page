import './style.css'
import meatJpg from '../../asset/resource/meat.jpg'
import chickenJpg from '../../asset/resource/chicken.jpg';
import { menuItem } from './menu-item.js';
function LoadMenu() {
    const content = document.querySelector('#content')
    const menuDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    menuDiv.id = 'menuDiv'
    h2.textContent = 'Our Menu'
    const meatItem = menuItem(meatJpg, "Chef Fei's chili stir-fried pork")
    const chickenItem = menuItem(chickenJpg, 'The chef tears the chicken by hand')
    const p = document.createElement('p')
    p.append(meatItem, chickenItem)
     menuDiv.append(h2, p)
    content.append(menuDiv)
}

export { LoadMenu }