import React, { useState } from 'react';
import './BookingPortal.css';
import { Booking } from '@/services/api';

import { Await } from 'react-router-dom';

const BookingPortal = () => {
  

  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventRequirements: "",
    desiredServices: '',
    message:''
  });

  

  const handleChange = (e) => {
    
    setEventDetails({ ...eventDetails, [e.target.id]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
 
   
    // Here you would typically send the booking request to the backend
    console.log('Booking submitted:', eventDetails);
    
      const res = await Booking(eventDetails.eventName, eventDetails.eventDate, eventDetails.eventLocation, eventDetails.eventRequirements, eventDetails.desiredServices,eventDetails.message)

      if (res.status === 200) {
      
        console.log('Booking submitted:', res.data)
    }

  };

  return (
    <div className="booking-portal">
      <h1 className='heading'>Event Booking Portal</h1>
      
      <div className="booking-form">
       
        <form onSubmit={handleSubmit}>
          
  
           <input type="text" name="eventName" id="eventName" placeholder="Event eventName"  onChange={handleChange} required /> 
           <input type="date" name="eventDate" id="eventDate" placeholder="eventDate "  onChange={handleChange} required /> 
           <input type="text" name="eventLocation" id="eventLocation" placeholder="Event eventLocation"  onChange={handleChange} required /> 
           <input type="text" name="eventRequirements" id="eventRequirements" placeholder="Event eventRequirements"  onChange={handleChange} required /> 
                 <input type="text" name="desiredServices" id="desiredServices" placeholder="Desired desiredServices"  onChange={handleChange} required /> 
                 <input type="text" name="message" id="message" placeholder=" Type your message"  onChange={handleChange} required /> 
           
          <button type="submit" className='submit_button'>Submit Booking Request</button>
        </form>
      </div>

     
    </div>
  );
};

export default BookingPortal;