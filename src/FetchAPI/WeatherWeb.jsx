import React, { useEffect, useState } from 'react';

function WeatherWeb() {
  const [search, setSearch] = useState('');
  const [weatherAllData, setWeatherAllData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
        // let data = strings.sort((a, b) => a - b);
        // console.log(data); 
        // items.sort((a, b) => a.price - b.price); // price
        // console.log(items);
        console.log(" @@ sort 1  ", data)
        const sort = data.sort((a, b) => a.username || a.email || a.city.localeCompare(b.name));
        console.log(" @@ sort 22  ", sort)
        setWeatherData(sort);

    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Filter data based on search input
  useEffect(() => {
    const filteredData = weatherData.filter(val =>
      val.username.toLowerCase().includes(search.toLowerCase())
    );
    setWeatherAllData(filteredData);
  }, [search, weatherData]);

  // Handle search input change
  const handleSearchData = (event) => {
    setSearch(event.target.value);
  };

  // Handle refresh data
  const handleRefreshData = () => {
    fetchData();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Today's Weather Live Data</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={search}
          onChange={handleSearchData}
          placeholder="Enter search term..."
          style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
        />
        <button
          onClick={handleRefreshData}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
          aria-label="Refresh data"
        >
          Refresh Data
        </button>
        <button
          onClick={() => setSearch('')}
          style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}
          aria-label="Clear search"
        >
          Clear Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {weatherAllData.length > 0 ? (
          weatherAllData.map((val, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <div><strong>Username:</strong> {val.username}</div>
              <div><strong>Email:</strong> {val.email}</div>
              <div><strong>City:</strong> {val.address.city}</div>
            </div>
          ))
        ) : search && weatherAllData.length === 0 ? (
          <div style={{ padding: '10px 0' }}>
            <strong>No data found for "{search}".</strong>
          </div>
        ) : (
          weatherData.map((val, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <div><strong>Username:</strong> {val.username}</div>
              <div><strong>Email:</strong> {val.email}</div>
              <div><strong>City:</strong> {val.address.city}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WeatherWeb;
