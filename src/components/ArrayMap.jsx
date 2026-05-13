import { useState } from "react";


export default function ArrayMap({arr}) {
    const [items, setItems] = useState(arr);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      <button className='btn' onClick={() => setItems([...items].map((value) => value * 2))}>Double Values1</button>
    </div>
  )
}
