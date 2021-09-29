import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, handleDelete, handleUpdatePrice}) {
  return (
    <ul className="cards">
      {plantList.map(plant => <PlantCard key={plant.id} handleDelete={handleDelete} handleUpdatePrice={handleUpdatePrice} {...plant}/>)}
    </ul>
  );
}

export default PlantList;
