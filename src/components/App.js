import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(data => setToyArray(data))
  }, []);

  const [toyArray, setToyArray] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //Shows new toy to the DOM
  function renderToy (newToyObj){
    const renderedArray = [...toyArray,newToyObj]
    setToyArray(renderedArray)
  }
  function handleDelete(deleteToy){
    const newToys = toyArray.filter(toy => toy.id !== deleteToy.id);
    setToyArray(newToys);
  }
  
  function handleUpdateToy(updateToy){
    const newToys = toyArray.map((toy) => toy.id === updateToy.id? updateToy : toy);
    setToyArray(newToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm renderToy = {renderToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleUpdateToy= {handleUpdateToy}handleDelete ={handleDelete} toyArray = {toyArray} />
    </>
  );
}

export default App;
// import React, { useState, useEffect } from "react";

// import Header from "./Header";
// import ToyForm from "./ToyForm";
// import ToyContainer from "./ToyContainer";

// function App() {
  
// const [allToys,setAllToys] = useState([])
// // structure useEffect (()=>{},[])
//   useEffect(() => {                         
//     fetch ("http://localhost:3001/toys")
//     .then((response) => response.json())
//     .then(data => setAllToys(data))
//     },[]);


//   const [showForm, setShowForm] = useState(false);

//   function handleClick() {
//     setShowForm((showForm) => !showForm);
//   }

//   return (
//     <>
//       <Header />
//       {showForm ? <ToyForm /> : null}
//       <div className="buttonContainer">
//         <button onClick={handleClick}>Add a Toy</button>
//       </div>
//       <ToyContainer allToys ={allToys}/>
//     </>
//   );
// }

// export default App;