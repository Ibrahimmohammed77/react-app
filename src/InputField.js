import { useState } from "react";
export default function InputField() {
  const [input, setInput] = useState("");
  function chanagValue(value) {
    setInput(value);
  }
  return (
    <>
      <label>Enter name</label>
      <input type="text" value={input}
       onChange={(e) => chanagValue(e.target.value)} />
    </>
  );
}
