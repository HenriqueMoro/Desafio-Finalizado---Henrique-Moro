const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const connection = require('./database/connection');
const crypto = require('crypto');


const app = express();
const corsOption = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
} 

app.use(express.json());
app.use(routes);
app.use(cors(corsOption));
app.post ('/', cors(corsOption),  async (request,response)=>{
    const {name, country, localtime, temperature, icons, wind, pressure, precip, humidity, feelslike, visibility} = request.body
    const id = crypto.randomBytes(4).toString('HEX');
        
    
         await connection('weather').insert({
        id,
        name,
        country,
        localtime,
        temperature,
        icons,
        wind,
        pressure,
        precip,
        humidity,
        feelslike,
        visibility,
         })
         return response.json({id});
})
app.get ('/historic', cors(corsOption),async (request, response)=>{
    const weather = await connection('weather').select('*');
    return response.json(weather);
})


/*app.use(function (req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET ,PUT ,POST ,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors());
    next();


})*/
app.listen(3333);
