import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './pages/Home';
import Contact from './pages/contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VillaDetails from './Components/VillaDetails';
import './App.css'; // Import the CSS file

const villas = [
  { id: 1, name: 'Villa Sunshine', location: 'Malibu', rating: 4.5, price: '$500', description: 'Beautiful villa in Malibu with ocean views.' },
  { id: 2, name: 'Mountain Retreat', location: 'Aspen', rating: 4.8, price: '$700', description: 'Cozy retreat in the mountains of Aspen.' },
  // Add more villas as needed
];

const App = () => {
  return (
     
       <Routes>
        <Route exact path="/">
          <Home villas={villas} />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/villa/:id">
          <VillaDetails villas={villas} />
        </Route>
        </Routes>
  );
};

export default App;
