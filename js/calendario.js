// DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const ddia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')

const texto = document.querySelector('#texto')

// Eventos

setInterval(relogio,1000)

// Funções

function relogio() {

    let dia = new Date ()

    let hr = dia.getHours() // mostrando somente as horas
    let min = dia.getMinutes() // mostrando somente os minutos
    let seg = dia.getSeconds() // mostrando somente os segundos

    let d = dia.getDate() // mostrando a data
    let m = dia.getMonth()+1 // // mostrando o mês
    let y = dia.getFullYear() // // mostrando o ano

    if (hr < 10) {
        hr="0"+hr // para adicionar o 0 antes do número abaixo de 10
    }

    if (min < 10) {
        min="0"+min
    }
    
    if (seg < 10) {
        seg="0"+seg
    }
   
    if (d < 10) {
        d="0"+d
    }
    
    if (m < 10) {
        m="0"+m
    }

    if (hr > 5 && hr < 12) {
        texto.textContent =  'Bom dia!'
    }else if (hr >= 12 && hr < 18) {
        texto.textContent =  'Boa tarde!'
    }else{
        texto.textContent =  'Boa noite!'
}   

if (hr > 5 && hr < 12) {
    //manhã 
    document.querySelector('#change').src = "images/sol.png";
    document.body.className = "manha";
    
} else if (hr >= 12 && hr < 18) { 
    //tarde
    document.querySelector('#change').src = "images/solT.png";
    document.body.className = "tarde";
    
} else {
    //noite
    document.querySelector('#change').src = "images/lua.png";
    document.body.className = "noite";

}

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg

    ddia.textContent = d
    mes.textContent = m
    ano.textContent = y

} 