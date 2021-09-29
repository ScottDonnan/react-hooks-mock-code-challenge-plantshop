import React, {useState} from "react";

function PlantCard({id, image, name, price, handleDelete, handleUpdatePrice}) {
  const [stock, setStock] = useState(true)
  const [plantPrice, setPlantPrice] = useState(price)
  
  function changePrice(e){
    setPlantPrice(e.target.value)
    handleUpdatePrice(e, id, price)
  }
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price:</p>
      <input
        type="text"
        value={plantPrice}
        onChange={(e) => changePrice(e)}
      />
      {stock ? (
        <button className="primary" onClick={() => setStock(!stock)}>In Stock</button>
      ) : (
        <button onClick={() => setStock(!stock)}>Out of Stock</button>
      )}
      <button className="primary" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
