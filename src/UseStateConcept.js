import { useState } from "react";
export default function UseStateConcept() {
  const [name,setName] = useState("Ahmed");
  
  function changeBtn() {
   name==="Ahmed"? setName("ibra"):setName("Ahmed");
  }
  return (
    <>
      <div>
        <button onClick={changeBtn}>start</button>
        <h2>{name}</h2>
      </div>
    </>
  );
  
}
