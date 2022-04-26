// MQTT subscriber
const mqtt = require('mqtt')
const mysql = require('mysql')
var client = mqtt.connect('mqtt://localhost:1234')
var topic = 'Joy2301'

let LuzActual = "red"

const db = mysql.createConnection({
    host: 'boq4vmi1hnif0xcijzyy-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'utfvrwdwbazujr5y',
    password: 'utfvrwdwbazujr5y',
    database: 'boq4vmi1hnif0xcijzyy'
})

/*const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "semaforo-iot"
})*/

/*db.connect(() =>{
    console.log('Database Ok')
})*/

client.on('message', (topic, message)=>{
    message = message.toString()
    //LuzActual = message
    console.log(message)

    /*db.connect((err) => {
        if (err) {
            return console.log(err.message);
        } else {
            // select query
            var query = `UPDATE tiposangre SET Nombre = ? WHERE id = ?`;
            var color = ["yellow", 8];
            // query to database
            db.query(query, color, function(err, response, result) {
                if (err) {
                    return console.log(err.message);
                } else {
                    console.log(response);
                }
            });
        }
        // close the connection
        db.end();
    });*/

    /*db.query(
        'update luz set LuzActual =' + message + 'where id = 1'
    )*/
})

client.on('connect', ()=>{
    client.subscribe(topic)
})