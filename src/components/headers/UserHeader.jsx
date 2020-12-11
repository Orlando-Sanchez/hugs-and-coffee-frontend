import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/styles/idk.css';
import { useSelector } from 'react-redux';

const UserHeader = () => {
  let token = useSelector(state => state.userReducer.token)

  return (
    <nav>
      <div className="pink lighten-2 nav-wrapper navb">
        <Link to="/" className="brand-logo"><h5 className="header__font header__logo">A&C</h5></Link>
        {token === null && <Link to="/login"><h5 className="header__login no-deco">Login</h5></Link>}
      </div>
    </nav>
  )
}

export default UserHeader