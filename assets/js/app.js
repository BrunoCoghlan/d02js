const fcm = document.querySelector(".fcm")
const brd = "brd"



function marco() {
    if (fcm.classList.contains(brd)) return fcm.classList.remove(brd)
    fcm.classList.add(brd)
}

