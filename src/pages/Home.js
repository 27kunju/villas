import React, { useState } from 'react';
import VillaCard from '../Components/villascard';
import SearchBar from '../Components/SearchBar';
import '../App.css';
const Home = ({ villas }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVillas = villas.filter(villa =>
    villa.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div> 
  

      <div className="search-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="villas-list">
        {filteredVillas.map(villa => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>
    </div>
  );
};

export default Home;
