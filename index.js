const btnPiedra = document.querySelector(".piedra")
const btnPapel = document.querySelector(".papel")
const btnTijera = document.querySelector(".tijera")
const imgArmaMia = document.querySelector(".mi-arma-seleccionada")
const imgArmarival = document.querySelector(".arma-seleccionada-rival")
const resultado = document.querySelector("#resultado")
const misVictorias = document.querySelector("#misVictorias")
const victoriasRival = document.querySelector("#victoriasRival")
const ganasteOperdiste = document.querySelector(".ganaste-perdiste")
const yoBackground = document.querySelector(".yo")
const rivalBackground = document.querySelector(".rival")
const VolverAJugar = document.querySelector(".volver-a-jugar")
const VolverAJugarBoton = document.querySelector(".volver-a-jugar-boton")
const CosasAocultar = document.querySelector(".para-ocultar")




const armas = ["piedra", "papel", "tijera"]

let miArma = ""

function piedraF(){
    imgArmaMia.innerHTML = `<img src="./Fotos/piedra-removebg-preview.png">`
    imgArmaMia.classList.remove("hidden")
    imgArmarival.classList.remove("hidden")
    yoBackground.style.background = 'red';
    miArma = armas[0]
    armaRival();
    juego();
    finDelJuego();
    limpiarArmas();
}

function papelF(){
    imgArmaMia.innerHTML = `<img src="./Fotos/papel-removebg-preview.png">`
    imgArmaMia.classList.remove("hidden")
    imgArmarival.classList.remove("hidden")
    yoBackground.style.background = 'rgb(32, 32, 255)';
    miArma = armas[1]
    armaRival();
    juego();
    finDelJuego();
    limpiarArmas();
}

function tijeraF(){
    imgArmaMia.innerHTML = `<img src="./Fotos/tijera-removebg-preview.png">`
    imgArmaMia.classList.remove("hidden")
    imgArmarival.classList.remove("hidden")
    yoBackground.style.background = 'rgb(40, 158, 40)';
    miArma = armas[2]
    armaRival();
    juego();
    finDelJuego();
    limpiarArmas();
}



btnPiedra.addEventListener("click", piedraF);
btnPapel.addEventListener("click", papelF);
btnTijera.addEventListener("click", tijeraF);



let armasAleatorio = armas[Math.floor(Math.random() * armas.length)];

function armaRival (){
    
     armasAleatorio = armas[Math.floor(Math.random() * armas.length)];


    if (armasAleatorio == armas[0]){
        imgArmarival.innerHTML = `<img src="./Fotos/piedra-removebg-preview.png">`
        rivalBackground.style.background = 'red';

    }else if (armasAleatorio == armas[1]){
        imgArmarival.innerHTML = `<img src="./Fotos/papel-removebg-preview.png">`
        rivalBackground.style.background = 'rgb(32, 32, 255)';
    }
    else if (armasAleatorio == armas[2]
        ){imgArmarival.innerHTML = `<img src="./Fotos/tijera-removebg-preview.png">`
        rivalBackground.style.background = 'rgb(40, 158, 40)';

    }

    
}

let contadorMisVictorias = 0
let contadorVictoriasRival = 0

function juego(){

    if (miArma == armasAleatorio){
        resultado.innerHTML = `Empate`
        misVictorias.innerHTML = contadorMisVictorias

    }
    else if (miArma == armas[0] && armasAleatorio == armas[2]){
        resultado.innerHTML = `Ganaste`
        contadorMisVictorias++
        misVictorias.innerHTML = contadorMisVictorias
  
    }
    else if (miArma == armas[1] && armasAleatorio == armas[0]){
        resultado.innerHTML = `Ganaste`
        contadorMisVictorias++
        misVictorias.innerHTML = contadorMisVictorias

    }
    else if (miArma == armas[2] && armasAleatorio == armas[1]){
        resultado.innerHTML = `Ganaste`
        contadorMisVictorias++
        misVictorias.innerHTML = contadorMisVictorias

    }
    else{
        resultado.innerHTML = `Perdiste`
        contadorVictoriasRival++
        misVictorias.innerHTML = contadorMisVictorias
        victoriasRival.innerHTML = contadorVictoriasRival
    }

    

}


function finDelJuego (){

    if (contadorMisVictorias == 5){
        ganasteOperdiste.innerHTML = "Victoria! <br/> 😁"
        CosasAocultar.classList.add("ocultar")
        VolverAJugar.classList.remove("ocultar")
    }else if (contadorVictoriasRival == 5){
        ganasteOperdiste.innerHTML = "Perdiste <br/> 😓"
        CosasAocultar.classList.add("ocultar")
        VolverAJugar.classList.remove("ocultar")
    }
    
}

function ocultar(){
    CosasAocultar.classList.add("ocultar")
}

function limpiarArmas (){
    miArma == ""
    armasAleatorio == ""
}

VolverAJugarBoton.addEventListener("click", recargar =>{
    location.reload();
})
