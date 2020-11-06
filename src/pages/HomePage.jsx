import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Link to="/registro">
      <div>
        <h1>Registro</h1>
      </div>
    </Link>
  )
}

export default HomePage