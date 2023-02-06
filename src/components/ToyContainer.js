import React from "react";
import ToyCard from "./ToyCard";
//

function ToyContainer({toyArray,handleDelete,handleUpdateToy}) {
  const newToyArray = toyArray.map((toy) => {
    return <ToyCard toy={toy}
    deleteToy = {handleDelete} 
    key={toy.id} 
    name={toy.name} 
    image={toy.image}
    likes={toy.likes} 
    handleUpdateToy= {handleUpdateToy}/>
  });

  return (
    <div id="toy-collection">{newToyArray}</div>
  );
}

export default ToyContainer;

// import React from "react";
// import ToyCard from "./ToyCard";

// function ToyContainer({allToys}) {
//   const newToyArray = allToys.map((toy) => {
//     return <ToyCard key={toy.id} name={toy.name} image={toy.image} likes={toy.likes}/>
//   })
  
//   console.log(newToyArray)
  
//   return (
//     <div id="toy-collection">{newToyArray}</div>
//   );
// }

// export default ToyContainer;