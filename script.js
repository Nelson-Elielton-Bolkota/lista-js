
let lista_nomes = ["luis komar", "dionata", "bolsonaro"]

function renderizar() {
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""

    for (let item of lista_nomes) {
        let elemento = document.createElement('li')
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    }
}

document.getElementById("add_final").addEventListener("click", () => {
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
document.getElementById()



document.addEventListener("DOMContentLoaded", renderizar)