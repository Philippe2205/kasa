import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "../css/style.css";
import data from "../data.json";
import Carousel from "../Composant/Carousel";
import Tags from "../Composant/Tags";
import StarRating from "../Composant/StarRating";
import Accordion from "../Composant/Accordion";

function FicheLogement() {
  const { id } = useParams(); // Access the URL parameter using the `useParams` hook

  const item = data.find(function (_item) {
    return _item.id === id;
  });
  if (!item || item.id !== id) {
    return <Navigate to="/404" />;
  }
  return (
    <div className="global">
      <Carousel images={item.pictures} />
      <div className="ficheLogement">
        <div className="titres">
          <div className="titre">
            <h2>{item.title}</h2>
            <h3>{item.location}</h3>
          </div>
          <div className="autor">
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="" />
          </div>
          <Tags data={item.tags} />
          <StarRating rating={item.rating} />
        </div>
        <div className="description">
          <Accordion title="Description" description={item.description} />
          <Accordion
            title="Équipements"
            description={<Tags data={item.equipments} />}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
