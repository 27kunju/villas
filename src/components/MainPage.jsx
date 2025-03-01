import React, { useState } from 'react';
import Carousel from './Carousel';
import VillaCard from './VillaCard';
import './MainPage.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { images } from './Utils/images';
import { villaList } from './Utils/villaList';

export const MainPage = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [defaultVillaList, setDefaultVillaList] = useState(villaList);

  // Filter function
  const filterVillas = () => {
    return villaList.filter(villa => {
      const matchesLocation = location ? villa.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesCheckIn = checkInDate ? villa.availableFrom <= checkInDate : true;
      const matchesCheckOut = checkOutDate ? villa.availableTo >= checkOutDate : true;
      return matchesLocation && matchesCheckIn && matchesCheckOut;
    });
  };

  // Handle search button click
  const handleSearch = () => {
    if (checkInDate && checkOutDate && checkOutDate < checkInDate) {
      alert('Check-out date must be after check-in date.');
      return;
    }
    setDefaultVillaList(filterVillas());
  };

   // Handle Check-in Date Change
   const handleCheckInDateChange = (date) => {
    if (checkOutDate && date >= checkOutDate) {
      alert('Check-in date cannot be on or after the check-out date.');
      setCheckInDate(null);
    } else {
      setCheckInDate(date);
    }
  };

  // Handle Check-out Date Change
  const handleCheckOutDateChange = (date) => {
    if (checkInDate && date < checkInDate) {
      alert('Check-out date must be after the check-in date.');
      setCheckOutDate(null);
    } else {
      setCheckOutDate(date);
    }
  };


  return (
    <div>
      <div className="carousel-container">
        <Carousel images={images} />
      </div>
      <div className="search-section">
        <div className="location-input">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <input
            type="text"
            placeholder="Type city or property name..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="date-picker custom-date-picker">
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={checkInDate}
            onChange={handleCheckInDateChange}
            placeholderText="Check In"
            minDate={new Date()}
            isClearable
          />
        </div>
        <div className="date-picker custom-date-picker">
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
            placeholderText="Check Out"
            minDate={checkInDate ? checkInDate : new Date()}
            isClearable
          />
        </div>
        <div className="search-buttons">
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
      </div>
      <div className="villa-cards-container">
        {defaultVillaList.map(villa => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
