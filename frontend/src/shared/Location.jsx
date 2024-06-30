import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Location.css";

const Location = () => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            fetchAddress(latitude, longitude);
          },
          error => {
            setError('Error fetching location data');
            console.error("Error fetching location data: ", error);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
      }
    }, []);
  
    const fetchAddress = async (lat, lon) => {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
          params: {
            lat: lat,
            lon: lon,
            format: 'json'
          }
        });
        const addressData = response.data.address;
        const city = addressData.city || addressData.town || addressData.village || '';
        const district = addressData.suburb || addressData.neighbourhood || '';
        setAddress(`${district}, ${city}`);
      } catch (error) {
        setError('Error fetching address data');
        console.error("Error fetching address data: ", error);
      }
    };
  
    return (
      <div className="location">
             <i class="ri-map-pin-fill  location_icon"></i> <span>Vị trí của bạn</span>
          <div className="location_details">
           
              {error ? (
                <div className="location_description">{error}</div>
              ) : address ? (
                <div className="location_description">{address}</div>
              ) : (
                <div className="location_description">Loading your location...</div>
              )}
            </div>
      </div>
    );
  };
  
  export default Location;