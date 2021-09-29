import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [listForSearching, setListForSearching] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {
      setPlantList(data)
      setListForSearching(data)
    })
  }, [])

  function handleSubmit(newPlant){
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then((plant => {
      setPlantList([...plantList, plant])
      setListForSearching([...listForSearching, plant])
    }))
  }

  function handleSearch(searchValue){
    if(searchValue){
      const searchPlantList = listForSearching.filter(plant => plant.name.toLowerCase().includes(searchValue.toLowerCase()))
      setPlantList(searchPlantList)
    } else {
      setPlantList([...listForSearching])
    }
  }

  function handleDelete(id){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const trimmedDownPlantList = plantList.filter(plant => plant.id !== id)
      setPlantList(trimmedDownPlantList)
    })
  }
  
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plantList={plantList} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
