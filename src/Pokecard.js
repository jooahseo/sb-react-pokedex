import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="poke-card">
      <h5 className="poke-name">{name}</h5>
      <img className="poke-img" src={imageURL} alt={name} />
      <span className="poke-type">Type: {type}</span>
      <span className="poke-exp">EXP: {exp}</span>
    </div>
  );
};

export default Pokecard;
