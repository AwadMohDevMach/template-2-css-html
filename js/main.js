// select variabls 
let barsLink = document.querySelector(".bars")
let allLinks = document.querySelector("ul")
let theInput = document.querySelector(".form input")
let iconSearch = document.querySelector(".form i")

iconSearch.addEventListener("click" , function(){
    theInput.classList.toggle("clicked")

    allLinks.classList.toggle("none")
})

barsLink.onclick = function(){
    barsLink.classList.toggle("clicked")
    
}