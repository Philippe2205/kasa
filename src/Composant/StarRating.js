import React from "react";
import filledStarImage from "../images/star-active.png";
import emptyStarImage from "../images/star-inactive.png";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starClassName = i <= rating ? filledStarImage : emptyStarImage;
    stars.push(<img src={starClassName} alt="stars" key={i} />);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
