import React from 'react'
import img from '../images/404.png';
import '../css/style.css';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="global">
    <div className="error">
      <img src={img} alt="erreur 404" />
      <p className="err1">Oups! La page que vous demandez n'éxiste pas.</p>
      <Link to="/" className="err2">Retourner sur la page d'accueil</Link>
    </div>

    </div>

  )
}

export default Error