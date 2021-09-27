const HTTP = require('http');
const HTTPS = require('https');

// no se puede volver a declarar const PORT
const PORT3 = process.env.PORT || 3001; 


/* let url = 'https://jsonplaceholder.typicode.com/posts';
HTTPS
    .get(url, res => {
        let data = '';
        res.on('data', (chu: string) => data += chu);
        res.on('end', () => {
            let parseData = JSON.parse(data);
            console.log(parseData);


            const server2 = HTTP.createServer((req: any, res: any) => {
                res.statusCode = 200;
                
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Type', 'text/html');
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.end(parseData.fact,'hello word\n');
            });
        });
    }); */
    /* el objeto parse Data devuelve un fact  y longitud 
    parseData.fact yselodamos a res,end().
    Si usaramos content 'application/json' deberiamos convertir a JSON con la JSON.stringify(parseData)
    pero solo usamos */


const server = HTTP.createServer((req:any, res:any) => {
    res.statusCode = 200;
    /* el objeto parse Data devuelve un fact  y longitud 
    parseData.fact yselodamos a res,end().
    Si usaramos content 'application/json' deberiamos convertir a JSON con la JSON.stringify(parseData)
    pero solo usamos */
    //res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>doesnt share</h2>. Hello word\n');
}).listen(PORT3,()=>{
    console.log('runing on port ${PORT3}');
    
});



/* server.listen(PORT3,()=>{
    console.log('runing on port ${PORT3}');
    
}); */