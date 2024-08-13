import React, { useState, useEffect } from 'react';


function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    // For now, we'll use dummy data
    const dummyEvents = [
      { id: 1, name: 'Summer Wedding', date: '2023-07-15', location: 'Beach Resort' },
      { id: 2, name: 'Corporate Conference', date: '2023-09-22', location: 'Downtown Convention Center' },
      { id: 3, name: 'Birthday Bash', date: '2023-08-05', location: 'Luxury Hotel' },
    ];
    setEvents(dummyEvents);
  }, []);

  return (
    <div className="event-list">
      <h3>Your Events</h3>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h4>{event.name}</h4>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <button className="edit" onClick={() => console.log('Edit event', event.id)}>Edit</button>
              <button className="delete" onClick={() => console.log('Delete event', event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => console.log('Add new event')}>Add New Event</button>
    </div>
  );
}

export default EventList;