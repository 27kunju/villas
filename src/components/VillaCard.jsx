import React from 'react';
import './VillaCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const VillaCard = ({villa}) => {
  return (
    <div className="villa-cards">

          <div className="villa-card" key={villa.id}>
          <div>
            <img src={villa.img} alt={villa.name} />
            </div>
            <div className='villa-details'>
            <h4>{villa.name}</h4>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span> {villa.location}</span>
          </div>
            <div className='price-btn'>
            <p>{villa.price}</p>
            <Link to={`/villa/${villa.id}`}>
              <button className='view-btn'>View Details</button>
            </Link>
            </div>
            </div>
    </div>
  );
};

export default VillaCard;
