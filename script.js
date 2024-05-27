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

let listaCases = [
  

    
]

function renderizarCases() {
    //encontrar o eleme0nto e inserir os cards
    let containerCards = document.querySelector(".container-cards")
   
    //para cada case da listaCases
    let template = ""

    listaCases.forEach(cardCase => {
        //montar html do card, passando os atributos do case
        template += `<div class="card">
        <img src=${ cardCase.imagem } alt="">
        <p>${ cardCase.descricao }
        <button>Ver mais</button>
    </div>`
    })
    //inserir html dos cases montados no elemento container cards
    containerCards.innerHTML = template
}

function carregarCases() {

    fetch("http://localhost:3000/cases")
    .then ( (resposta) => resposta.json())
    .then ( (dadosTratados) => {
        console.log(dadosTratados)
        listaCases = dadosTratados
        renderizarCases() 
    })
}

function solicitarOrcamento(event) {
    //pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById ("campo-email").value
    let valorDescricao = document.getElementById ("campo-texto").value

    // organizar os valores em objetos

    let dadosForm = {
    nome: valorNome,
    email: valorEmail,
    descricao: valorDescricao
}
console.log (dadosForm);    
    //enviar requisicao para API
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
      // Caso sucesso
      .then(resposta => {
          console.log(resposta);
          //limpar os inputs e mostrar um alert de sucesso
          document.querySelector("#contato form").reset()
          alert("Solicitação enviada com sucesso!! 👌👍")

      }) 
    // Caso Erro
    .catch(erro => {
        console.log (erro)
        alert ("Erro na requicição 😭😭😭")
    })
        //alerta com msg de erro

        event.preventDefault()
}