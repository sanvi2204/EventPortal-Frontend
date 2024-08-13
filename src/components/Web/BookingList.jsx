import React, { useState, useEffect } from 'react';

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your API
    // For now, we'll use dummy data
    const dummyBookings = [
      { id: 1, eventName: 'Summer Wedding', managerName: 'John Doe', status: 'Confirmed', date: '2023-07-15' },
      { id: 2, eventName: 'Corporate Conference', managerName: 'Jane Smith', status: 'Pending', date: '2023-09-22' },
      { id: 3, eventName: 'Birthday Bash', managerName: 'Mike Johnson', status: 'In Progress', date: '2023-08-05' },
    ];
    setBookings(dummyBookings);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'green';
      case 'Pending': return 'orange';
      case 'In Progress': return 'blue';
      default: return 'black';
    }
  };

  return (
    <div className="booking-list">
      <h3>Your Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Manager</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td data-label="Event">{booking.eventName}</td>
                <td>{booking.managerName}</td>
                <td style={{ color: getStatusColor(booking.status) }}>{booking.status}</td>
                <td>{booking.date}</td>
                <td>
                  <button onClick={() => console.log('View booking', booking.id)}>View</button>
                  <button className="delete" onClick={() => console.log('Cancel booking', booking.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingList;