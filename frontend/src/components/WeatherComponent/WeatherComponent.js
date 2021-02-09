import './WeatherComponent.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

import api from '../../services/api'



const DayName = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday']
const MonthName = ['January','February','March', 'April','May','June','July','August','September','October','November','December']
let now = new Date() 
  

  function WeatherComponent(props) {
    
    const [Search, setSearch] = useState(false)
    const [weather, setWeather] = useState(false)
    const [query, setQuery] = useState(false)
   
    
    useEffect(()=>{
      if (props.loading === true){
        setSearch( props.value)
        }
    },[props.loading])

    //função para poder pegar o IP do usuario atravez de uma api, se a pesquisa for falsa ele pega o ip, se não for ele usa o dado da pesquisa
     useEffect(()=>{
      if (Search === false){

      axios.get('https://api64.ipify.org').then(response => {
      setQuery(response.data);

    }).catch(error => {console.log(error)})
    }
    else{
    
      setQuery(Search)
      
    }
  
  
  },[Search])
    //api para pegar os dados climaticos
    useEffect(()=>{
      const params = {
        access_key: '3cdef95e4dfcaf32d9212120b01f4cf8',
        query: query,
      }
    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
    
    if(response.data.success === false){
      console.log('erro')
    } 
    else {
      //enviando os dados para o backend para poder armazenar
    setWeather(response.data)
    console.log(response.data)
    const name = response.data.location.name
    const country = response.data.location.country
    const  localtime=response.data.location.localtime
    const  temperature=response.data.current.temperature
    const  icons=response.data.current.weather_icons
    const  wind=response.data.current.wind_speed
    const  pressure=response.data.current.pressure
    const  precip=response.data.current.precip
    const  humidity=response.data.current.humidity
    const  feelslike=response.data.current.feelslike
    const  visibility=response.data.current.visibility
      
      const data = {
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
      }
      console.log(data)
      api.post('/', data).then(response => {console.log('Sucesso')})
}
    
    }).catch(error => {
      console.log(error);
    });
    },[query])
   
    
    
  if (weather === false){
    return(
    <h1>
      
    </h1>)
  }
  else {
    return (
      <div className='component-card'>
        
        <div className='location-data'>
          <h1 className='location-location'>{weather.location.name}, {weather.location.country}</h1>
          <div>{DayName[now.getDay()]} {now.getDate()} {MonthName[now.getMonth()]}</div>
        </div>
        
        <div className='div'>
          
          <div className='temperature_icon-container'>
            
            <div className='icon-container'>
              <img  className='weather-icon' src={weather.current.weather_icons}></img>
            </div>
            
            <div className='temperature-container'>
              <div className='temperature-value'>{weather.current.temperature}°C</div>
              <div className='weather-description'>{weather.current.weather_descriptions}</div>
            </div>
            
            </div>
            <div className='stats'>
              <div className='stats-col'>
                  <div>
                    <div className='stats-number'>{weather.current.feelslike}°C</div>
                    <div className='stats-description'>Fellslike</div>
                  </div>
                  <div>
                    <div className='stats-number'>{weather.current.pressure}mb</div>
                    <div className='stats-description'>Pressure</div>
                  </div>
                  <div>
                    <div className='stats-number'>{weather.current.visibility}km</div>
                    <div className='stats-description'>Visibility</div>
                  </div>
              </div>
              <div className='stats-col'>
                  <div>
                    <div className='stats-number'>{weather.current.wind_speed}kmph</div>
                    <div className='stats-description'>Wind</div>
                  </div>
                  <div>
                    <div className='stats-number'>{weather.current.precip}mm</div>
                    <div className='stats-description'>Precipitation</div>
                  </div>
                  <div>
                    <div className='stats-number'>{weather.current.humidity}%</div>
                    <div className='stats-description'>Humidity</div>
                  </div>
              </div>  
                    
                    
                    
            </div>
                  
                  
                
          
          
          
          
        </div>
      </div>
    );
  }
}

export default WeatherComponent;
