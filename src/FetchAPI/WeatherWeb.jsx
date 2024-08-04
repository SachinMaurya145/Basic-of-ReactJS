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

      // Sort data by username, then by email, and finally by city
      const sortedData = data.sort((a, b) => {
        const usernameComparison = a.username.localeCompare(b.username);
        if (usernameComparison !== 0) return usernameComparison;

        const emailComparison = a.email.localeCompare(b.email);
        if (emailComparison !== 0) return emailComparison;

        return a.address.city.localeCompare(b.address.city);
      });

      setWeatherData(sortedData);
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

  // Filter data based on search input across all keys
  useEffect(() => {
    const filteredData = weatherData.filter(val => 
      Object.keys(val).some(key => {
        const value = val[key];
        // Check nested objects, for example: val.address.city
        if (typeof value === 'object' && value !== null) {
          return Object.keys(value).some(nestedKey =>
            String(value[nestedKey]).toLowerCase().includes(search.toLowerCase())
          );
        }
        // Check primitive types (string, number, etc.)
        return String(value).toLowerCase().includes(search.toLowerCase());
      })
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
      <h2>Today's Weather Live Data - only  name // all key </h2>
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
