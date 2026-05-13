
import React from 'react'

export default function ArrayForeachLoop() {

  const [arr, setArr] = React.useState(["apple", "banana", "cherry"]);

  return (
    <>
    <div>
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
    <button className='btn' onClick={() => setArr([...arr].map((value) => value.toUpperCase()))}>Uppercase Values</button>
    </>
  )
}




// export default function ArrayForeachLoop({ arr }) {
//   let text = " ";

//   arr.forEach(ForEachLoop);

//   function ForEachLoop(item, index) {
//     text += index + ": " + item + " <br>";
//   }
//   // using innerHTML to set the innerHTML of the div element to x
//   document.getElementById("demo7").innerHTML = text;
  
//   return (
//     //option 1: using dangerouslySetInnerHTML to set the innerHTML of the div element to x
//     // <div id="demo7" dangerouslySetInnerHTML={{ __html: text }} />

//     //option 2: using innerHTML to set the innerHTML of the div element to x
//     <div id="demo7"></div>
//   );
// }
