const header1 = document.querySelector("div#header-1 img")
const hideBtn = document.querySelector("#hide-img")
const showBtn = document.querySelector("#show-img")
const changeRadius = document.querySelector("#change-radius")

changeRadius.addEventListener('click', function() {
    header1.style.display = "radius"
})

hideBtn.addEventListener('click', function() {
    header1.style.display = "none"
})

showBtn.addEventListener('click', function() {
    header1.style.display = "block"
})