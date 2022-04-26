let $lucesDelSemaforo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 0;

console.log($lucesDelSemaforo);

function mostrarLuz(){

    var api = "http://localhost/api/Semaforo";

    fetch(api).then(
 
        data => data.json()).then(colors =>{

            color = colors.Title;

            console.log(color);

            var color_rojo     = document.querySelector('#color_rojo');
            var color_amarillo = document.querySelector('#color_amarillo');
            var color_verde    = document.querySelector('#color_verde');
    
            if (color == 'red') {
        
                color_rojo.style.backgroundColor     = 'red';
                color_amarillo.style.backgroundColor = 'black';
                color_verde.style.backgroundColor    = 'black';
        
                var msg = new SpeechSynthesisUtterance();
                msg.text = "El Semaforo esta en Rojo";
                window.speechSynthesis.speak(msg);
            }
        
            if (color == 'yellow') {
        
                color_rojo.style.backgroundColor     = 'black';
                color_amarillo.style.backgroundColor = 'yellow';
                color_verde.style.backgroundColor    = 'black';
        
                var msg = new SpeechSynthesisUtterance();
                msg.text = "El Semaforo esta en Amarillo";
                window.speechSynthesis.speak(msg);
            }
        
            if (color == 'green') {
        
                color_rojo.style.backgroundColor     = 'black';
                color_amarillo.style.backgroundColor = 'black';
                color_verde.style.backgroundColor    = 'green';
        
                var msg = new SpeechSynthesisUtterance();
                msg.text = "El Semaforo esta en Verde";
                window.speechSynthesis.speak(msg);
            }

    });
   
}

setInterval(mostrarLuz,5000);