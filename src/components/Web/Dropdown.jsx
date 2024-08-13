import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        Dropdown
        <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/action1" onClick={toggleDropdown}>Action 1</Link>
          <Link to="/action2" onClick={toggleDropdown}>Action 2</Link>
          <Link to="/action3" onClick={toggleDropdown}>Action 3</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;