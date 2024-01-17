const fcm = document.querySelector(".fcm")
const brd = "brd"
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const mjs = document.querySelector("#mjs")

input1.addEventListener("change", change)
input2.addEventListener("change", change)
input3.addEventListener("change", change)


/*ESPACIO DE FUNCIONES */
function marco() {
    if (fcm.classList.contains(brd)) return fcm.classList.remove(brd)
    fcm.classList.add(brd)
}
function change() {
    let total = 0
    total += Number(Math.floor(input1.value))
    total += Number(Math.floor(input2.value))
    total += Number(Math.floor(input3.value))
    console.log(total)
    if (total > 10) return mjs.innerHTML = `Tienes muchos stickers, solo puedes tomar 10 y tienes ${total} devuelve ${total - 10} `
    mjs.innerHTML = `Tienes ${total} stickers`
    if (total <= 0) return mjs.innerHTML = `No tienes sticker`
}
