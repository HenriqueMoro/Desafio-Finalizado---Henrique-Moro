import './index.css';
import  api from '../../services/api';
import '../../components/WeatherComponent/WeatherComponent.css';

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {TiWeatherPartlySunny} from 'react-icons/ti'



function Historic(){
    const [itens, setItens] = useState([])
    

    
    //Pegando os dados do backend para exibir o historico 
    useEffect(()=>{
        api.get('/historic').then(response =>{
            setItens(response.data)
        })},[])
      
    return(
        
        <div>
            <div>
            
            <nav className="navbarItens">
                <h1 className='navbarLogo'>Weather.io</h1>
                <div className='menuIcon'>
                    <TiWeatherPartlySunny></TiWeatherPartlySunny>
                </div>
                <ul className='navMenu'>
                    <li><Link to="/" className='link' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <a href="https://henriquemoro.github.io" className='link' style={{ textDecoration: 'none' }}>About Me</a>
                </ul>
            </nav>
            </div>
            <h1 className='Title'>Historic</h1>
            <div className='global'>
            {itens.map(itens =>(
                <div className='component-card' key={itens.id}>
        
                <div className='location-data'>
                  <h1 className='location-location'>{itens.name}, {itens.country}</h1>
                  <div>{itens.localtime}</div>
                </div>
                
                <div className='div'>
                  
                  <div className='temperature_icon-container'>
                    
                    <div className='icon-container'>
                      <img  className='weather-icon' src={itens.icons}></img>
                    </div>
                    
                    <div className='temperature-container'>
                      <div className='temperature-value'>{itens.temperature}°C</div>
                      
                    </div>
                    
                    </div>
                    <div className='stats'>
                      <div className='stats-col'>
                          <div>
                            <div className='stats-number'>{itens.feelslike}°C</div>
                            <div className='stats-description'>Fellslike</div>
                          </div>
                          <div>
                            <div className='stats-number'>{itens.pressure}mb</div>
                            <div className='stats-description'>Pressure</div>
                          </div>
                          <div>
                            <div className='stats-number'>{itens.visibility}km</div>
                            <div className='stats-description'>Visibility</div>
                          </div>
                      </div>
                      <div className='stats-col'>
                          <div>
                            <div className='stats-number'>{itens.wind}kmph</div>
                            <div className='stats-description'>Wind</div>
                          </div>
                          <div>
                            <div className='stats-number'>{itens.precip}mm</div>
                            <div className='stats-description'>Precipitation</div>
                          </div>
                          <div>
                            <div className='stats-number'>{itens.humidity}%</div>
                            <div className='stats-description'>Humidity</div>
                          </div>
                      </div>  
                            
                            
                            
                    </div>
                          
                          
                        
                  
                  
                  
                  
                </div>
              </div>
            ))}</div>
        </div>
    )
      
    }
export default Historic;
           