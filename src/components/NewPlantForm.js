import React, {useState} from "react";

function NewPlantForm({handleSubmit}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  
  function createPlantObj(e){
    e.preventDefault()
    const newPlant = {
      name: name,
      image: image,
      price: price,
    }
    handleSubmit(newPlant)
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={createPlantObj}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
