import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './Carousel';
import './VillaDetails.css'; // Ensure this file exists and has styles
import { villaList2 } from './Utils/villaList';
import { amenitiesIcons } from './Utils/villaList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const VillaDetails = () => {
  const { id } = useParams();
  const [villa, setVilla] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingStatus, setBookingStatus] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const filteredVilla = villaList2.find(v => v.id === parseInt(id));
    setVilla(filteredVilla);
  }, [id]);

  useEffect(() => {
    if (checkInDate && checkOutDate && villa) {
      const timeDiff = new Date(checkOutDate) - new Date(checkInDate);
      const numberOfDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) || 1; // Ensure at least 1 day
      const price = numberOfDays * villa.price;
      setTotalPrice(price);
    }
  }, [checkInDate, checkOutDate, villa]);

  if (!villa) {
    return <div>Loading or Villa not found...</div>; // Provide feedback if villa is not found or still loading
  }

  const isValidDateRange = () => {
    return !checkInDate || !checkOutDate || checkOutDate >= checkInDate;
  };

  const handleBooking = () => {
    if (isValidDateRange()) {
      setBookingStatus('Booking confirmed!');
      setShowNotification(true);

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } else {
      setBookingStatus('Invalid date range!');
      setShowNotification(true);

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };


  return (
    <div className="villa-details-container">
      <div className="left-section">
        <h1>{villa.name}</h1>
        <Carousel images={villa.images || []} /> {/* Provide fallback for images */}
        <h2>Villa Description</h2>
        <p>{villa.description}</p>
        <h3>Amenities</h3>
        <ul className="amenities-list">
          {villa.amenities && villa.amenities.length > 0 ? (
            villa.amenities.map((amenity, index) => {
              const IconComponent = amenitiesIcons[amenity];
              return (
                <li key={index} className="amenity-item">
                  {IconComponent && <IconComponent />} {amenity}
                </li>
              );
            })
          ) : (
            <li>No amenities available</li>
          )}
        </ul>
        <h3>Reviews</h3>
        <ul>
          {villa.reviews && villa.reviews.length > 0 ? (
            villa.reviews.map((review, index) => (
              <li key={index}><strong>{review.user}:</strong> {review.comment}</li>
            ))
          ) : (
            <li>No reviews available</li>
          )}
        </ul>
      </div>
      <div className="right-section">
        <div className="booking-form">
          <h3>Book Now</h3>
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            isClearable
            placeholderText="Check-in"
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            
          />
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check-out"
            dateFormat="yyyy/MM/dd"
            minDate={checkInDate ? checkInDate : new Date()}
            isClearable
            
          />
          <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
          <button disabled={!isValidDateRange()} onClick={handleBooking} className ='book-btn'>Book Now</button>
          {showNotification && (
            <div className={`notification ${bookingStatus === 'Booking confirmed!' ? 'success' : 'error'}`}>
              {bookingStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VillaDetails;
