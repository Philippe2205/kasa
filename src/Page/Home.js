import React from "react";
import Banniere from "../Composant/Banniere";
import Gallery from "../Composant/Gallery";
import img from "../images/IMG1.png";

const Home = () => {
  return (
    <div className="global">
      <Banniere image={img} titre="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
};

export default Home;
