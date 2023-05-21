var Leo = window.document.getElementById("leo")
var Sam = window.document.getElementById("sam")
var Bru = window.document.getElementById("bru")
var Seta_d = window.document.getElementById("seta-d")
var Seta_e = window.document.getElementById("seta-e")

function RolarDireita() {
    Leo.style = "display:none"
    Bru.style = "display:flex"    
    Seta_d.style = "display: none"
    Seta_e.style = "display: flex"
}

function RolarEsquerda() {
    Leo.style = "display: flex"
    Bru.style = "display: none"    
    Seta_d.style = "display: flex"
    Seta_e.style = "display: none"
}