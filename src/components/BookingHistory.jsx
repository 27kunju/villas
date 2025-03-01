import React from 'react';
import { Link } from 'react-router-dom';
import './BookingHistory.css';

const BookingHistory = () => {
  // Mock booking data
  const bookings = [
    { id: 1, villa: 'Villa A', date: '2023-07-01', status: 'Completed' },
    { id: 2, villa: 'Villa B', date: '2023-07-15', status: 'Cancelled' },
  ];

  return (
    <div className="booking-history-container">
      <div className="profile-tabs">
        <Link to="/profile" className="tab-link">My Profile</Link>
        <Link to="/booking-history" className="tab-link active">Booking History</Link>
      </div>
      <h2>Booking History</h2>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <p><strong>Villa:</strong> {booking.villa}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Status:</strong> {booking.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
