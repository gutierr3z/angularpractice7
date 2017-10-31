const express = require( "express" );
const nedb = require( "nedb" );
const rest = require( "express-nedb-rest" );
const cors = require( "cors" );

const app = express();
const restAPI = rest();

const datastore = new nedb({
    
    filename: 'myAppDB', // name of file generated
    autoload: true
});

restAPI.addDatastore( 'apples', datastore );

app.use( cors() );
app.use( '/', restAPI );

app.listen( 3000 );