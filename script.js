
let lista_nomes = ["luis komar", "dionata", "bolsonaro"]
let lista_maiuscula = lista_nomes.map(nome=> nome.toUpperCase())
let lista_filtrada = lista_nomes.filter(nome => nome.length >= 5)

function renderizar() {
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""

    lista_nomes.forEach(nome =>{
        let li = document.createElement("li")
        li.innerText = nome
        lista_pagina.appendChild(li)
    })

    contar_nomes()
}

function renderizar2(lista_qualquer){
    const lista_nova = document.getElementById("lista2")
    lista_nova.innerHTML = ""

    lista_qualquer.forEach(nome =>{
        let li = document.createElement("li")
        li.innerText = nome
        lista_nova.appendChild(li)
    })
}

function contar_nomes(){
    const contagem = document.getElementById("contagem")
    let contador = 0

    for(let nome of lista_nomes){
        if(nome.length >= 5){
            contador++
        }
    }
    contagem.innerText = contador

}


document.getElementById("add_final").addEventListener("click", ()=>{
    const input = document.getElementById("inputnome")
    lista_nomes.push(input.value)
    input.value = ""
    renderizar()
})
document.getElementById("add_inicio").addEventListener("click", () => {
    const input = document.getElementById("inputnome")
    lista_nomes.unshift(input.value)
    input.value = ""
    renderizar()
})
document.getElementById("rv_ultimo").addEventListener("click", () => {
    lista_nomes.pop()
    renderizar()
})
document.getElementById("rv_primeiro").addEventListener("click", () => {
    lista_nomes.shift()
    renderizar()
})
document.getElementById("masculo").addEventListener("click",()=>{
    renderizar2(lista_maiuscula)
})
document.getElementById("filtrado").addEventListener("click", ()=> {
    renderizar2(lista_filtrada)
})


document.addEventListener("DOMContentLoaded", renderizar)