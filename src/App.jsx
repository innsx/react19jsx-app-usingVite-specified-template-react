import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MyFunc from "./components/MyFunc";
import MyClass from "./components/MyClass";
import MyFuncES6 from "./components/MyFuncES6";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MyFunc />

      <MyFuncES6 />

      <MyClass />
    </>
  );
}

export default App;
