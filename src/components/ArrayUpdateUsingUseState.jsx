import React from "react";

export default function ArrayUpdateUsingUseState() {
  // State variable to hold the list of items, initialized as an empty array.
  const [items, setItems] = React.useState([]);

  // State variable to hold the current value of the input field, initialized as an empty string.
  const [name, setName] = React.useState("");

  // Ref to the input element, used to set focus back to the input field after adding an item.
  //   const [inputValue, setInputValue] = React.useState("");

  // 1. Create a ref to store the input DOM element
  // This ref is used to access the input element directly, allowing us to set focus on it after adding an item.
  const inputRef = React.useRef(null);

  // This function is called when the "Add Item" button is clicked.
  // It updates the items array by adding the new name, clears the input field,
  // and sets focus back to the input field.
  function handleAddItem() {
    setItems([...items, name]);

    //setInputValue(""); // Clear the input field after adding an item
    inputRef.current.value = ""; // Clear the input field using the ref

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type here..."
          ref={inputRef}
          //   value={inputValue}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            // setInputValue(e.target.value);
          }}
        />
        <button className="btn" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
}
