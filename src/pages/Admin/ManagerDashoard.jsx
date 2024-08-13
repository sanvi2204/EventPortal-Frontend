import React from 'react';
import './ManagerDashboard.css';

const ManagerDashboard = () => {
  // Example events data
  const currentEvent = {
    title: "Annual Company Meeting",
    date: "August 15, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Hall A",
    description: "A comprehensive discussion on the company's performance, strategies, and future plans."
  };

  const upcomingEvents = [
    {
      title: "Marketing Strategy Workshop",
      date: "August 20, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Meeting Room 3",
      description: "Interactive workshop on the upcoming marketing strategies and campaigns."
    },
    {
      title: "Product Launch Event",
      date: "September 5, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Main Auditorium",
      description: "Launching our new product line with presentations and demonstrations."
    },
    {
      title: "Team Building Activity",
      date: "September 10, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Outdoor Grounds",
      description: "A full-day outdoor activity designed to strengthen team bonds and improve collaboration."
    }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Manager Dashboard</h1>
      </header>

      <main className="dashboard-main">
        <section className="current-event">
          <h2>Current Event</h2>
          <div className="event-card">
            <h3>{currentEvent.title}</h3>
            <p><strong>Date:</strong> {currentEvent.date}</p>
            <p><strong>Time:</strong> {currentEvent.time}</p>
            <p><strong>Location:</strong> {currentEvent.location}</p>
            <p>{currentEvent.description}</p>
          </div>
        </section>

        <section className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ManagerDashboard;
