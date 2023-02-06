import React from "react";

function ToyCard({name, image,likes,deleteToy,toy,handleUpdateToy}) {
  
  console.log(toy.id);
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        deleteToy(toy);
      });
  }
  function handleLikeClick() {
    const updateObj = {
      likes: toy.likes + 1,
    };
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(handleUpdateToy);
  }
  
    
  
  
    return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
// import React from "react";

// function ToyCard({name,image,likes}) {
//   return (
//     <div className="card">
//       <h2>{{name} /* Toy's Name */}</h2>
//       <img
//         src={{image}/* Toy's Image */}
//         alt={{name}/* Toy's Name */}
//         className="toy-avatar"
//       />
//       <p>{likes} Likes </p>
//       <button className="like-btn">Like {"<3"}</button>
//       <button className="del-btn">Donate to GoodWill</button>
//     </div>
//   );
// }

// export default ToyCard;