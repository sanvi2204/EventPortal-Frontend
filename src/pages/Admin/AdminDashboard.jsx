// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
// const AdminDashboard = () => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await fetch(' http://localhost:8080/api/contact/getContactinfo');
//           const jsonData = await response.json();
//           setData(jsonData);
//         } catch (error) {
//           setError(error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
  
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }
  
//     return (
//         <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>EMAIL</th>
//             <th>Name</th>
//             <th>EventName</th>
//             <th>EventDetail</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.email}</td>
//               <td>{item.username}</td>
//               <td>{item.eventName}</td>
//               <td>{item.eventDetails}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
  
//     )
// }

// export default AdminDashboard

import React, { useState, useEffect } from 'react';
import './Admin.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ events: 0, clients: 0, revenue: 0 });
  const [recentEvents, setRecentEvents] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setStats({ events: 50, clients: 30, revenue: 100000 });
    setRecentEvents([
      { id: 1, name: 'Corporate Gala', date: '2023-07-15', status: 'Completed' },
      { id: 2, name: 'Wedding Ceremony', date: '2023-07-20', status: 'In Progress' },
      { id: 3, name: 'Product Launch', date: '2023-07-25', status: 'Upcoming' },
    ]);
    setTasks([
      { id: 1, description: 'Confirm catering for Corporate Gala', deadline: '2023-07-10' },
      { id: 2, description: 'Book venue for Product Launch', deadline: '2023-07-15' },
      { id: 3, description: 'Send invitations for Wedding Ceremony', deadline: '2023-07-18' },
    ]);
  }, []);

  return (
    <div className="admin-dashboard">
      <header>
        <h1>Event Planner Admin Dashboard</h1>
      </header>
      <main>
        <section className="stats">
          <div className="stat-card">
            <h2>Total Events</h2>
            <p>{stats.events}</p>
          </div>
          <div className="stat-card">
            <h2>Total Clients</h2>
            <p>{stats.clients}</p>
          </div>
          <div className="stat-card">
            <h2>Total Revenue</h2>
            <p>${stats.revenue.toLocaleString()}</p>
          </div>
        </section>
        <section className="recent-events">
          <h2>Recent Events</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.map(event => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="tasks">
          <h2>Upcoming Tasks</h2>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                <span>{task.description}</span>
                <span>Due: {task.deadline}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;