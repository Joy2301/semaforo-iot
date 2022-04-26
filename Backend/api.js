const express = require('express');
const cors     = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.set('json spaces',2);


// MQTT publisher
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'Joy2301';

//Le pasamos los colores del semaforo a un array
var color = ["green", "yellow", "red"];
let contadorDeLuz = 2;

client.on('connect', ()=>{
    setInterval(()=>{
        //Vamos recorriendo el array de colores cada 5 segs
        contadorDeLuz++;
        if (contadorDeLuz > 2) contadorDeLuz = 0;

        //Publicamos el color actual como un mensaje
        client.publish(topic, color[contadorDeLuz]);
                        
        console.log('Mensaje Enviado:', color[contadorDeLuz]);

        color_semaforo = color[contadorDeLuz];

    }, 5000)

});

app.get('/',(req,res) => {
    res.send('Node Js API');
});

app.get('/api/Semaforo',(req,res) => {
        res.json({"Title":color_semaforo});
});

const port = process.env.port || 80;

app.listen(port,() => console.log("Escuchando por el puerto  " + port));