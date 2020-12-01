import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/home.css';
import UserHeader from '../components/headers/UserHeader';
import { ReactComponent as Coffees } from '../images/coffees.svg';

const HomePage = () => {
  return (
    <div>  
      <div>
        <UserHeader />
        <div className="intro">
          <Coffees className="coffees"/>
          <p>Un café es un abrazo atrapado en una taza</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default HomePage