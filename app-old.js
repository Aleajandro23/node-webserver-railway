//const { Console } = require('console');
const http = require('http');

http.createServer( (req, res ) => {

   // console.log( req );

    //  res.writeHead( 200 )

    res.write(' Hola Mundi ');
    res.end();

})
 .listen( 8080 );


    console.log('Escuchando el puerto', 8080);