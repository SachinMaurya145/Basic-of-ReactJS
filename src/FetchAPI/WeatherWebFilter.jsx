import React, { useState } from 'react';

function WeatherWebFilter() {
  // State for the search input
  const [search, setSearch] = useState('');
  // State to hold the filtered weather data based on search
  const [filteredWeatherData, setFilteredWeatherData] = useState([]);

  // Static weather data for different states
  const weatherData = [
    {
      windSpeed: "10 KM/h",
      temperature: "30°C",
      place: "New York",
      humidity: "70%"
    },
    {
      windSpeed: "12 KM/h",
      temperature: "35°C",
      place: "California",
      humidity: "65%"
    },
    {
      windSpeed: "8 KM/h",
      temperature: "28°C",
      place: "Texas",
      humidity: "80%"
    },
    {
      windSpeed: "15 KM/h",
      temperature: "40°C",
      place: "Arizona",
      humidity: "20%"
    }
  ];

  // Handle search and filter the weather data
  const handleDataSearch = (event) => {
    event.preventDefault();
    // Filter the weather data based on the search input
    const filteredData = weatherData.filter(data =>
      data.place.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredWeatherData(filteredData);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Today's Weather Live Data</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by state..."
          style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        />
        <button
          onClick={handleDataSearch}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
        >
          Search Data
        </button>
      </div>
      <div>
        {
          filteredWeatherData.length > 0 ? (
            filteredWeatherData.map((val, index) => (
              <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                <div><strong>Place:</strong> {val.place}</div>
                <div><strong>Wind Speed:</strong> {val.windSpeed}</div>
                <div><strong>Humidity:</strong> {val.humidity}</div>
                <div><strong>Temperature:</strong> {val.temperature}</div>
              </div>
            ))
          ) : search ? (
            <div>No weather data found for "{search}".</div>
          ) : (
            <div>Please enter a state name to search.</div>
          )
        }
      </div>
    </div>
  );
}

export default WeatherWebFilter;
