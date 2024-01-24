import React, {useState} from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = React.useState();
    const [location, setLocation] = useState('');
    const WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=` + process.env.REACT_APP_WEATHER_KEY + `&units=metric`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(WeatherAPI)
                .then(res => {
                    const data = res.data;
                    setData(data);
                    console.log(data)
            }).catch(error => {
                console.error("Error fetching weather data:", error);
                // Handle the error, e.g., show a user-friendly message
                alert("Could not fetch weather data. Please check the city name and try again.");
            });
        }
    }

    return (
        <div className="App">
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
                    <section className="content_container">
                        <section className="weather_card_header">
                            <h1>Daily Forecast</h1>
                        </section>
                        <h2 className="weather_city">{data.name}</h2>
                        <figure className="weather_figure">
                            <img src={`assets/${data.weather[0].icon}.png`} alt="weather_icon"/>
                        </figure>
                        <section className="weather_info">
                            <p className="weather_temp">{data.main.temp.toFixed()}°C</p>
                            <p className="weather_desc">{data.weather[0].description}</p>
                        </section>
                    </section>
                </>
            )}
        </div>
    );
}

export default App;
