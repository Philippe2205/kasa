import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

const Gallery = () => {
  const apartments = data.slice(0, 20); // Sélectionne les 6 premiers appartements
  return (
    <div className="gallery">
      {apartments.map((apartment) => (
        <Link
          to={`/logement/${apartment.id}`}
          key={apartment.id}
          className="appart"
        >
          <img src={apartment.cover} alt={apartment.title} />
          <div className="overlay">
            <h3>{apartment.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
