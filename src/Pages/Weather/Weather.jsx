import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Container , TextField , 
    Box , Grid  
 } from '@mui/material';
 import "./Weather.css";
function Weather() {
    const [weather , setWeather] = useState([]);
    const [value , setValue] = useState("Egypt");
    const key = '0e445dd22dff49878fc115509232402';
    const apis = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=3&aqi=no&alerts=no    `
    const funcWeather = ()=>{
        axios.get(apis).then((res) =>{
            if (res.data) {
                setWeather(res.data)
            }
        }).catch(err => console.error(err))
    }
    const handelWeather = (e)=>{
        setValue(e.target.value)
    }
    const filterationWeather = weather?.forecast?.forecastday?.map(({date , day}, index)=>(
        <Grid item alignContent='center'  xs={12} md={4} key={index} >
            <div className="box-1">

                <div variant="h6" component="span"  sx={{ flexGrow: 1 }}>
                {date}
          </div> 
            </div>
            <div className="box-2" spacing={4}>
                <div className="box-3">
                <img src={day?.condition?.icon} alt="" />
            <div variant="h5" component="h5"  sx={{ flexGrow: 1 }}>
            {day?.maxtemp_c}°c
          </div> 

          <div variant="body1" component="span"  sx={{ flexGrow: 1 }}>
            {day?.condition?.text}
          </div> 
                </div>
          <ul>
                <li>{day.avgtemp_c}°c</li>
                <li>{day.mintemp_c}°c</li>
            </ul>
            </div>
            
     </Grid>
     
     )) 
    
    useEffect(()=>{
        funcWeather();
    },[value])
const filterationWeatherHours = weather?.forecast?.forecastday[0].hour?.map(({time , temp_c} , index)=> (
    <tr key={index}>
          <td>{index>12? `${index-12}:00 PM`  : `${index}:00 AM` } </td>
          <td>{time}</td>
          <td>{temp_c}°c</td>
        </tr>
))  
    return ( 
        <div className='weather-app'>
            <Container>
            <Box    mb={3}>
      <TextField fullWidth  variant='filled'   label="Enter Your Location"  onChange={(e)=> handelWeather(e)}
       id="fullWidth" color="primary" />
    </Box>
    <div variant="h5" component="h5"  sx={{ flexGrow: 2 }} mt={3} mb={3}>
        Location : {weather?.location?.name} , {weather?.location?.region}, {weather?.location?.country}

          </div> 
    <Grid container spacing={4}>
        {filterationWeather}
        <Grid md={6} xs={12} item>
    <div className="tbl-header">
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Date</th>
          <th>Temperature</th>
        </tr>
      </thead>
    </table>
    </div>
    <div className="tbl-content">
    <table>
        <tbody>
            {filterationWeatherHours}
        </tbody>
    </table>
    </div>

        </Grid>
    </Grid>

            </Container>
        </div>
     );
}

export default Weather;