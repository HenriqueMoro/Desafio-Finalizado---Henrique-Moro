import './home.css';
import '../../services/api';
import WeatherComponent from '../../components/WeatherComponent/WeatherComponent'
import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {TiWeatherPartlySunny} from 'react-icons/ti'

function Index(){
    const [values, setValues] = useState({ });
    const [loading, setLoading] = useState(false);
    const [exato, setExato] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setLoading(false)
    setValues(auxValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault()  
    setExato(values)
      setLoading(true)
  }
    return(
        
        <div >
            <nav className="navbarItens">
                <h1 className='navbarLogo'>Weather.io</h1>
                <div className='menuIcon'>
                    <TiWeatherPartlySunny></TiWeatherPartlySunny>
                </div>
                <div className='navMenu'>
                    <div><Link to="/historic" style={{ textDecoration: 'none' }} className='link'>Historic</Link></div>
                    <a style={{ textDecoration: 'none' }}href="https://henriquemoro.github.io"className='link' >About Me</a>
                </div>
            </nav>
           
            <div className='index-container'>
                <div className='container'><WeatherComponent value={exato} loading={loading}></WeatherComponent></div>
                <form onSubmit={handleSubmit}>
                    <input className='textfield'onChange={handleChange} placeholder="Search"></input>
                    <button  className ='input'type='submit' >Search</button>
                </form>
            </div>
        </div>
    )
}
export default Index;