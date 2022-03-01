var calculadora = document.querySelector('div#calculadora')
var resultado = document.querySelector('output#resultado')
var btnLine1 = document.querySelector('section#btn-line-1')

var btnBranco =  document.querySelector('button#btn-branco')
btnBranco.addEventListener('click', mudarFundoParaBranco)

var btnPreto =  document.querySelector('button#btn-preto')
btnPreto.addEventListener('click', mudarFundoParaPreto)

function mudarFundoParaBranco(){
    calculadora.style.background = '#E8F1F2'
    resultado.style.color = '#000'
    btnLine1.style.borderTop = 'solid 1px #000'
}

function mudarFundoParaPreto(){
    calculadora.style.background = '#000'
    resultado.style.color = '#E8F1F2'
    btnLine1.style.borderTop = 'solid 1px #fff'
}