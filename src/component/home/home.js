import './style.css'
import homeImg from '../../asset/resource/home.jpg'

function loadHome() {
    const content = document.querySelector('#content')
    const homeDiv = document.createElement('div')
    homeDiv.id = 'homeDiv'
    const img = document.createElement('img')
    img.src = homeImg
    const h2 = document.createElement('h2')
    h2.textContent = 'CHEF FEI Brand Story'
    const p = document.createElement('p')
    p.textContent = `The story of Chef Fei began in Hengyang, Hunan, a city renowned as the hometown of
stir-fried dishes in China.
Fei Lianghui, the brand's founder, developed a deep interest in stir-frying as a child
while watching his father cook by the stove.
Stir-frying is a cooking technique over a thousand years of history.
Chinese chefs find a balance between speed and heat to create the "wok hei, or
"essence of the wok, which gives the food its distinct flavor.
Fei Lianghui started his culinary career in 1997 and opened his first restaurant in 2003.He prefers natural, high-quality ingredients and insists on wok-frying every dish to
order using traditional Chinese methods.
His stir-frying technique is focused on bringing out the authentic flavors and
maintaining the quality of each ingredient.
This unwavering dedication to stir-frying has fueled the brand's steady growth.Today, there are nearly 200 direct stores across 13 provinces and cities in China,
serving a cumulative total of over 1o0 million customers.
Chef Fei's long-standing dedication has earned the brand prestigious titles such as
"King of Chinese Stir-Fried Meat Dish" and"2024 Forbes China F&B Pioneer,"
establishing Chef Fei as a benchmark in the field of Chinese stir-frying.
Now, this culinary tradition from the "hometown of stir-fry" has arrived in North
America, offering diners more diverse choices.
Chef Fei is committed to bringing customers the most unique dining experience in the
most authentic and sincere way.`

    homeDiv.append(img, h2, p)
    content.append(homeDiv)
}
export { loadHome }

