window.addEventListener("scroll", function(){
    var tesla_logo = document.querySelector("#cambio")
    tesla_logo.classList.toggle("color2", window.scrollY>0)
    var barra = document.querySelector("#nav-bar")
    barra.classList.toggle("d-none", window.scrollY>0)
    tesla_logo.classList.toggle("color2", window.scrollY>0)
    var barra = document.querySelector("#nav-bar-two")
    barra.classList.toggle("d-none", window.scrollY>0)
})
