let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeXis = document.getElementById("icone-xis")

function abreFechaMenu() {

    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        //mostrar o icone de X e esconder o barras
        iconeBarras.style.display = "none"
        //mostrar icone barras e esconder o X
        iconeXis.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")

        iconeXis.style.display = "none"
        iconeBarras.style.display = "inline"
    }

}

onresize = () => {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        //mostrar o icone de X e esconder o barras
        iconeBarras.style.display = "none"
        //mostrar icone barras e esconder o X
        iconeXis.style.display = "inline"
}
}

//carrosel
let banner = document.querySelector(".banner")

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"

]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide(){
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    //somar 1 na variavel slideAtual
    slideAtual++
    //Mostrar o slide de acordo com a variavel
    banner.classList.add(slides[slideAtual])
}