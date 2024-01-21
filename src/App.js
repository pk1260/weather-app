import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = React.useState();
    const [location, setLocation] = useState('');
    const WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=` + process.env.REACT_APP_WEATHER_KEY + `&units=metric`

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(WeatherAPI).then(res => {
                const data = res.data;
                setData(data);
                console.log(data)
            })
        }
    }

    return (
        <div className="App">
            <section className="app_container">
                <section className="weather_input">
                    <input
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyDown={searchLocation}
                        placeholder="Enter Location"
                        type="text"
                    />
                </section>
                {data && (
                    <>
                        <h2 className="weather_city">{data.name}</h2>
                        <p className="weather_description">{data.main.temp.toFixed()}°C</p>
                        <img src={`assets/${data.weather[0].icon}.png`} alt="weather_icon"/>
                        <section className="weather_info">
                            <p className="weather_temperature">{data.main.feels_like.toFixed()}°C</p>
                            <p className="weather_humidity">{data.main.humidity}%</p>
                            <p className="weather_wind">{data.wind.speed.toFixed()}KM/H</p>
                        </section>
                    </>
                )}
            </section>
        </div>
    );
}

export default App;
