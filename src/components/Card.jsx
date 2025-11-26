import React from "react";
import "./Card.css";

export default function Card({ title, subtitle, description, diagram, color }) {
  return (
    <div className="card">
      <div className="card-inner" style={{ background: color }}>
        <div className="card-front">
          <h2>{title}</h2>
          {subtitle && <h3>{subtitle}</h3>}
          <p className="diagram">{diagram}</p>
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
