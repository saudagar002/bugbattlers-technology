import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Bus Ticket Booking System</h2>
      <p>Choose from our available destinations and book your seat today!</p>
      <Link to="/booking">
        <button>Start Booking</button>
      </Link>
    </div>
  );
}

export default Home;