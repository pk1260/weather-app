import React, {useState} from 'react';

function App() {

    const WeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=' + process.env.REACT_APP_WEATHER_KEY;

    console.log(WeatherAPI)
    return (
        <div className="App">
            <section className="app_container">
                <h2 className="weather_city">Amsterdam</h2>
                <img src="#" alt="weather_icon"/>
                <p className="weather_description">25°C</p>
                <section className="weather_info">
                    <p className="weather_temperature">19°C</p>
                    <p className="weather_humidity">20%</p>
                    <p className="weather_wind">10KM/H</p>
                </section>
            </section>
        </div>
    );
}

export default App;
