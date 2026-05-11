// import { useState } from "react";
import { useState } from "react";
import AlertButton from "./AlertButton";
import NamingEventHandlerAsProps from "./NamingEventHandlerAsProps";
import ToolBar from "./ToolBar";

const ButtonContainers = () => {
  const [num, setNum] = useState(0);

  function handleSum() {
    setNum(num + 1);
    return (document.getElementById("demo6").innerHTML = num);
  }

  function handleClick() {
    return (document.getElementById("demo3").innerHTML =
      "Calling handleClick function when button is clicked");
  }

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  let text = sayHello("Alice");

  return (
    <div className="App">
      <br />
      <br />
      {/* example of using inline function in onClick event handler */}
      <button
        className="btn"
        type="button"
        onClick={() => {
          document.getElementById("demo").innerHTML = Date();
        }}
      >
        Click me
      </button>
      <p id="demo"></p>
      <br />
      <br />
      {/* example of using inline function in onClick event handler */}
      <button
        className="btn"
        type="button"
        onClick={() => {
          document.getElementById("demo2").style.fontSize = "35px";
          document.getElementById("demo2").innerHTML = "Hello World";
        }}
      >
        Click me too
      </button>
      <p id="demo2"></p>
      <br />
      <br />
      {/* example of passing a function/using function reference in onClick event handler */}
      <button className="btn" onClick={handleClick}>
        Click me three
      </button>
      <p id="demo3"></p>

      <br />
      <br />

      {/* example of passing anonymous function/using inline function in onClick event handler */}
      <button
        className="btn"
        onClick={() => {
          document.getElementById("demo4").innerHTML = toCelsius(70);
        }}
      >
        Click me four
      </button>
      <p id="demo4"></p>
      <br />
      <br />
      <button
        className="btn"
        onClick={() => {
          document.getElementById("demo5").innerHTML = text;
        }}
      >
        Click me five
      </button>
      <p id="demo5"></p>

      <br />
      <br />

      {/* passes a function: handleSum */}
      <button className="btn" onClick={handleSum}>
        Add
      </button>
      <p id="demo6"></p>

      <br />
      <br />
      <AlertButton className="btn1" message="Uploading....">
        Upload message
      </AlertButton>
      <br />
      <AlertButton message="Downloading....">Download message</AlertButton>
      <br />
      <br />

      {/* when button on NamingEventHandlerAsProps component is clicked, it calls the onSmash prop 
      which passes the anonymouse () => alert('...') function. */}
      <NamingEventHandlerAsProps onSmash={() => alert("Smash button clicked")}>
        Play Movies today!
      </NamingEventHandlerAsProps>
      <br />
      <br />
      <ToolBar />
      <br />
      <br />
    </div>
  );
};

export default ButtonContainers;
