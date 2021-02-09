const connection = require('../database/connection');



module.exports = {
     async index(request,response) {
        const weather = await connection('weather').select('*');
        return response.json(weather);
    },
    
      async create(request, response) {
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
         return response.json({name});
    }
    
};