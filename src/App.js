import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import  {MainPage } from './components/MainPage';
import MyProfile  from './components/MyProfile';
import BookingHistory  from './components/BookingHistory';
import { Login } from './components/Login';
import VillaCard from './components/VillaCard.jsx';
import  VillaDetails from './components/VillaDetails.jsx'
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import SignUp from './components/SignUp.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/villa/:id" element={<VillaDetails/>} />
      <Route path="/profile" element = {<MyProfile/>} />
      <Route path ="/history" element = {<BookingHistory/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "/about" element = {<About />} />
      <Route path = "/signup" element = {<SignUp />} />
      <Route path = "/forgot-password" element = {<ForgotPassword/>} />
    
      </Routes>
    </>
  );
};

export default App;

