import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles/idk.css';

const UserHeader = () => {
  return (
    <nav>
      <div className="pink lighten-2 nav-wrapper">
        <Link to="/" className="brand-logo no-deco">A&C</Link>
      </div>
    </nav>
  )
}

export default UserHeader