import React from "react";

export default function DisplayList({ mainData }) {
  return (
    <div className="display-main">
      <h1>List</h1>
      <div className="display-wrapper">
        {mainData.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
