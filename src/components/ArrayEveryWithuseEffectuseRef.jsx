

import { useEffect, useRef } from "react";

export default function ArrayEveryWithuseEffectuseRef({arr}) {

  const myElementRef = useRef(null);

  useEffect(() => {
    if (myElementRef.current) {
      myElementRef.current.innerHTML = "ArrayEvery: " + arr.join(", ");
    }
  }, [arr]);
  
  return (
    <div ref={myElementRef}></div>
  )
}
