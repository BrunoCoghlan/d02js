/*DECLARACION DE VARIABLES GLOBALES*/
const fcm = document.querySelector(".fcm")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const btn = document.querySelector("#btn")
const mjs = document.querySelector("#mjs")
const pswd1 = document.querySelector("#pswd1")
const pswd2 = document.querySelector("#pswd2")
const pswd3 = document.querySelector("#pswd3")
const btnpswd = document.querySelector("#btnpswd")
const mjspswd = document.querySelector("#mjspswd")
/*ESPACIO DE EVENTOS DE ESCUCHA */
btn.addEventListener("click", change)
fcm.addEventListener("click", marco)
btnpswd.addEventListener("click", password)
/*ESPACIO DE FUNCIONES */
/* Esta funcion se encarga de agregar la clase css brd, que agrega un borde a la imagen logrando un toggle con el if*/
function marco() {
    if (fcm.classList.contains("brd")) return fcm.classList.remove("brd")
    fcm.classList.add("brd")
}
/*imprime en pantalla si la cantidad de sticker es la correcta segun cuantos faltan o cuantos sobran. */
function change() {
    let total = 0
    if (verification(input1.value)) return
    if (verification(input2.value)) return
    if (verification(input3.value)) return
    total += +input1.value
    total += +input2.value
    total += +input3.value
    if (total > 10) return mjs.innerHTML = `Llevas demaciados stickers seleccionaste ${total}, devuelva ${total - 10} para llegar a 10 unidades`
    if (total < 10) return mjs.innerHTML = `Seleccionaste ${total} sticker, te faltan ${10 - total} para llegar a 10`
    if (total === 10) return mjs.innerHTML = "Haz seleccionado 10 stickers"
}
/*Filtra que los valores ingresados solo sean numeros enteros y positivos */
function verification(input) {
    if (input < 0) {
        alert("Error, Ingrese un numero positivo")
        return true
    }
    if (isNaN(input)) {
        alert("Error, Ingrese un numero")
        return true
    }
    if (input - Math.floor(input) !== 0) {
        alert("Error, ingrese un numero entero, no decimal")
        return true
    }
    return false
}
/* verifica que el password sea 911 o 714 */
function password() {
    const pswd = `${pswd1.value}${pswd2.value}${pswd3.value}`
    if(pswd === "911") return mjspswd.innerHTML = "Password 1 es correcto"
    if(pswd === "714") return mjspswd.innerHTML = "Password 2 es correcto"
    return mjspswd.innerHTML = "Password incorrecto, intente con otro"
}