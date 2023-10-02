import React from "react";
import "../css/style.css";

function Tags({ data }) {
  return (
    <div className="tags">
      {data.map((item) => (
        <div className="tag" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default Tags;
