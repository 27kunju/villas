import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const VillaDetails = ({ villas }) => {
  const { id } = useParams();
  const villa = villas.find(v => v.id === parseInt(id));

  return (
    <div>
      {villa ? (
        <>
          <h1>{villa.name}</h1>
          <p>Location: {villa.location}</p>
          <p>Rating: {villa.rating}</p>
          <p>Price: {villa.price}</p>
          <p>Description: {villa.description}</p>
        </>
      ) : (
        <p>Villa not found</p>
      )}
    </div>
  );
};

export default VillaDetails;
