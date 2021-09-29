import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, handleDelete}) {
  return (
    <ul className="cards">
      {plantList.map(plant => <PlantCard key={plant.id} handleDelete={handleDelete} {...plant}/>)}
    </ul>
  );
}

export default PlantList;
