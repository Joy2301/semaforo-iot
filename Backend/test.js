//Le pasamos los colores del semaforo a un array
var color = ["green", "yellow", "red"]
let contadorDeLuz = 2;

function mostrarLuz(){
    contadorDeLuz++;
    if (contadorDeLuz > 2) contadorDeLuz = 0;
    console.log(color[contadorDeLuz])

    switch(color[contadorDeLuz]) {
        case "red":
            ApagarSemaforo()
            document.getElementById("luz-circulo-red").style.backgroundColor = "red"

            var msg = new SpeechSynthesisUtterance();
            msg.text = "El Semaforo esta en Rojo";
            window.speechSynthesis.speak(msg);
            break;
        case "green":
            ApagarSemaforo()
            document.getElementById("luz-circulo-green").style.backgroundColor = "green"
            
            var msg = new SpeechSynthesisUtterance();
            msg.text = "El Semaforo esta en Verde";
            window.speechSynthesis.speak(msg);
        break;
        case "yellow":
            ApagarSemaforo()
            document.getElementById("luz-circulo-yellow").style.backgroundColor = "yellow"
            
            var msg = new SpeechSynthesisUtterance();
            msg.text = "El Semaforo esta en Amarillo";
            window.speechSynthesis.speak(msg);
        break;
        default:
            document.getElementById("luz-circulo-yellow").style.backgroundColor = "yellow"

    }
  
}

setInterval(mostrarLuz,5000);

function ApagarSemaforo(){
    document.getElementById("luz-circulo-red").style.backgroundColor = "black";
    document.getElementById("luz-circulo-green").style.backgroundColor = "black";
    document.getElementById("luz-circulo-yellow").style.backgroundColor = "black";
}