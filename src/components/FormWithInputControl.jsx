import { useState } from "react";

export default function FormWithInputControl() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    //When you interact with a web page—like clicking a link or submitting a form—the browser has "built-in" actions it performs automatically. 
    // Calling preventDefault() tells the browser, "Don't do that; I'll handle it myself with code instead".
    e.preventDefault();

    alert(`Form submitted with: ${inputValue}`);

    setInputValue(""); // Clear the input field after submission
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input">
          Enter Email:
          <input
            type="text"
            id="inputId"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" className="btn" />
      </form>
    </>
  );
}
