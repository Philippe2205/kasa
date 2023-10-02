import React from 'react'
import '../css/style.css';


const Banniere = ({ image, titre }) => {
  return (
    
      <div className="banniere">
            <img src={image} alt="paysage" />
            <div className="overlay">
            <h2>{titre}</h2>
            </div>
        </div>
    
  )
}

export default Banniere