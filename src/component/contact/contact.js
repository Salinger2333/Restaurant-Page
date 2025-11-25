import './style.css'
function LoadContact() {
    const content = document.querySelector('#content')
    const contactDiv = document.createElement('div')
    const h2 = document.createElement('h2')
    contactDiv.id = 'contactDiv'
    h2.textContent = 'Contact Us'
    const p = document.createElement('p')
    p.textContent = "Chef Fei's chili fried pork store   Chef Fei customer service hotline: 0731-89675999 (Telephone answering time: Monday to Sunday 10:00-12:00, 14:00-17:00)"
    contactDiv.append(h2, p)
    content.append(contactDiv)
}

export { LoadContact }