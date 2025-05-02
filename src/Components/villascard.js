import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const VillaCard = ({ villa }) => {
  return (
    <div className="villa-card">
      <h2>{villa.name}</h2>
      <p>Location: {villa.location}</p>
      <p>Rating: {villa.rating}</p>
      <p>Price: {villa.price}</p>
      <Link to={`/villa/${villa.id}`}>More Details</Link>
    </div>
  );
};

export default VillaCard;
