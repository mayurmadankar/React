import "./styles.css";
import { useRef, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  // Use the custom local storage hook here
  const [name, setName] = useLocalStorage("Name", "");
  const [age, setAge] = useLocalStorage("Age", 1);

  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const age = ageInput.current.value;

    setName(name);
    setAge(age);
    // Set the name and age here

    handleClear();
  };

  return (
    <div className="App">
      <div id="name">Name -{/* {name} */ name}</div>
      <div id="age">Age -{/* {age} */ age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput} />
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
