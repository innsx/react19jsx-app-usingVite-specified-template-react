import React from "react";

export default function UseStateStoreValueLetReactRender({ arr }) {
  const [items, setItems] = React.useState(arr);

  return (
    <>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item + " "}</p>
        ))}
      </div>
      <button
        className="btn"
        onClick={() => setItems([...items].map((value) => value * 2))}
      >
        Double Values
      </button>
      <br />
    </>
  );
}
