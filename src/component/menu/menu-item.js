const menuItem = function (src, title) {
    const itemDiv = document.createElement('div')
    itemDiv.className = 'menu-item'
    const img = document.createElement('img')
    img.src = src
    const h3 = document.createElement('h3')
    h3.textContent = title
    itemDiv.append(img, h3)
    return itemDiv
}
export { menuItem }