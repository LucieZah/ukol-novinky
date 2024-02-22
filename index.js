const bodyElement = document.querySelector ("body")
const novinky = document.querySelector (".news")
const titulek = document.querySelector ("h1")
const zprava1 = document.querySelector ("#zprava1")
// const obrazek = document.querySelector ("#zprava3 img")
const obrazek = document.querySelector ("#zprava3").querySelector("img")

bodyElement.style.backgroundColor = "#e9e9e9"
novinky.style.backgroundColor = "white"
novinky.style.width = "60rem"
titulek.classList.add ("news__title")
titulek.textContent = "Aktuální novinky"

zprava1.classList.add ("post--main")

obrazek.src = "images/zprava3-novy.jpg"
