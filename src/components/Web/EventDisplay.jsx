import React, { useState } from 'react';

const events = [
  { id: 1, title: "CRAZY RICH ASIANS PREMIERE PARTY", image: "https://www.kristinbanta.com/wp-content/uploads/2018/08/lounges5.jpg" },
  { id: 2, title: "ELLE's 2022 WOMEN IN HOLLYWOOD", image: "https://www.kristinbanta.com/wp-content/uploads/2023/08/13.jpg" },
  { id: 3, title: "LOTTE SIGNIEL BUSAN", image: "https://www.kristinbanta.com/wp-content/uploads/2023/01/HERO-1.jpg" },
  { id: 4, title: "LACD 4th ANNUAL FUNDRAISER", image: "https://www.kristinbanta.com/wp-content/uploads/2023/11/1L-1.jpg" },
  { id: 5, title: "CAMP SUPERNATURAL", image: "https://www.kristinbanta.com/wp-content/uploads/2023/01/1S.jpg" },
  { id: 6, title: "THE EYES OF TAMMY FAYE NYC PREMIERE", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/2a-1.jpg" },
  { id: 7, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 8, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 9, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 10, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 11, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 12, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 13, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
  { id: 14, title: "BLING EMPIRE x GENTLE MONSTER", image: "https://www.kristinbanta.com/wp-content/uploads/2022/05/1a.jpg" },
];

const EventsDisplay = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%' }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              width: '30%',
              margin: '10px',
              position: 'relative',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                opacity: hoveredEvent === event.id ? 0.7 : 1,
                transition: 'opacity 0.3s',
              }}
            />
            <div
              style={{
                position: 'ruby-text',
                bottom: '10px',
                left: '10px',
                right: '10px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              {event.title}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default EventsDisplay;