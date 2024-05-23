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

function mostrarProximoSlide() {


    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {

        //somar 1 na variavel slideAtual
        slideAtual++
    }
    else {
        slideAtual = 0
    }
    //Mostrar o slide de acordo com a variavel
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {


    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])


    if (slideAtual > 0) {
        //subtrair 1 na variavel slideAtual
        slideAtual--
    }
    else {
        slideAtual = 2
    }


    //Mostrar o slide de acordo com a variavel
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    
    banner.classList.remove(slides[slideAtual])

    slideAtual = indiceSlide

    banner.classList.add(slides[slideAtual])
}