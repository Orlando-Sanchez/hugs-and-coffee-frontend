import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/home.css';
import '../../src/styles/idk.css';
import { useSelector } from 'react-redux';
import UserHeader from '../components/headers/UserHeader';
import { ReactComponent as Coffees } from '../images/coffees.svg';
import { ReactComponent as Cellphones } from '../images/cellphones.svg';
import { handleCreateMyProfileClick } from '../utils/utils';

const HomePage = () => {
  let token = useSelector(state => state.userReducer.token)
  let profile = useSelector(state => state.userReducer.profile)

  return (
    <div>  
      <div className="main">
        <UserHeader />
        <div className="intro">
          <Coffees className="coffees"/>
          <p className="home__title prim-font">Un café es un abrazo atrapado en una taza</p>
          <p className="home__desc">Recibe aprecio y gratitud mediante donaciones online</p>
          <Link className="pink lighten-2 btn waves-effect waves-light no-deco button" to={handleCreateMyProfileClick} onClick={handleCreateMyProfileClick}>
            {token && profile ? 'Editar mi perfil' : 'Crear mi perfil'}
          </Link>
        </div>
      </div>
      <div className="desc-wrapper pink lighten-2">
        <div className="desc">
          <p className="prim-font white-font desc__title">Un perfil dedicado a recibir agradecimientos</p>
          <p className="white-font desc__text">Puedes crear una página en minutos sin conocimientos técnicos. Muestra tus datos y agradecimientos recibidos de otras personas.</p>
          <Cellphones className="cellphones"/>
        </div>
      </div>
    </div>
  )
}

export default HomePage