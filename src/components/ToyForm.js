import React, {useState} from "react";

function ToyForm({renderToy}) {
  
  const [newToy,setNewToy]= useState({
    name:"",
    image:""
  })
 
  function handleNewToy(e){
    setNewToy({...newToy, [e.target.name]:e.target.value})
  }

function handleSubmit (e) {
  e.preventDefault();
  const newToyObj = {
    name: newToy.name,
    image:newToy.image
  }
  e.target.reset();
  console.log(newToyObj)
  //pulled function in as a prop
  renderToy(newToyObj);


fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyObj),
    })
      .then((response) => response.json())
      .then((response) => renderToy(response));
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleNewToy}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleNewToy}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
