
/**
 * @title configuro express e instalo Nodemon
 * Estamos usando express
 * Instalamos modulo Nodemon solo para desarrollo 
 * npm i nodemon -D, para no reiniciar servidor cada vez
 * configure star en package.json para iniciar como prueba con el comando myDev desde actual
 * npm run myDev
 */

 const express2 = require('express');
 const app2 = express2();
 const PORT2 =3003;

//settings  
app2.set('port',process.env.PORT ||3000); //creamos variable port

//middlewares
//routes 

//static files
//inicializo servidor




//
//ejecuto con nodemon para no reinicuar servidor
//app2.listen(PORT2,()=>{
app2.listen(app2.get('port'),()=>{
    console.log('Express Listo escukie', app.get('port'),  `http://localhost:${PORT2}`);
    //abro navegador con este puerto.OJO poner comillas invertidas

});