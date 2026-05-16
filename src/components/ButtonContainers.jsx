// import { useState } from "react";
import { useState } from "react";
import AlertButton from "./AlertButton";
import NamingEventHandlerAsProps from "./NamingEventHandlerAsProps";
import ToolBar from "./ToolBar";
import NamingEventHandlerAsProps1 from "./NamingEventHandlerAsProps1";
import FindMax from "./FindMax";
import SumValue from "./SumValue";
import SortArrayAscendingWithCompreFunc from "./SortArrayAscendingWithCompreFunc";
import SortArrayDescending from "./SortArrayDescending";
import SortStringAscending from "./SortStringAscending";
import SortStringReverse from "./SortStringReverse";
import SortStringUsingToSortedMethod from "./SortStringUsingToSortedMethod";
import ArrayEveryWithuseEffectuseRef from "./ArrayEveryWithuseEffectuseRef";
import UseStateStoreValueLetReactRender from "./UseStateStoreValueLetReactRender";
import ArrayForeachLoop from "./ArrayForeachLoop";
import ArrayMap from "./ArrayMap";
import ArrayUpdateUsingUseState from "./ArrayUpdateUsingUseState";
// import APIRequestWithFetch from "./APIRequestWithFetch";
import ShowPosts from "./ShowPosts";
import APIAxiosGetRequestUseEffectNoDepcy from "./APIAxiosGetRequestUseEffectNoDepcy";
import ArrayFilterToUpdateArray from "./ArrayFilterToUpdateArray";
import UseEffectAsyncAwaitNeedsCleanup from "./UseEffectAsyncAwaitNeedsCleanup";
import APIAxiosPostRequest from "./APIAxiosPostRequest";
import APIAxiosGetRequestHandleError from "./APIAxiosGetRequestHandleError";
import FormSubmitWithData from "./FormSubmitWithData";
import FormWithInputControl from "./FormWithInputControl";
import FormWithMultipleInputs from "./FormWithMultipleInputs";
import ReactingToInputsWithState from "./ReactingToInputsWithState";
import PreservingNResettingState from "../components/States/PreservingNResettingState"


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

  const intArray = [11, 52, 37, 411, 5];

  const strgArray = ["cherry", "banana", "strawberry", "apple"];

  // const strgArray2 =["cherry", "banana", "strawberry", "apple"];

  // const ageArray = [32, 33, 16, 40];

  return (
    <>
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
      <NamingEventHandlerAsProps1
        onPlayMovie={() => alert("Playing movies")}
        onUploadImage={() => alert("Uploading image")}
      />
      <br />
      <br />
      <FindMax arr={intArray} />
      <br />
      <br />
      <SumValue arr={intArray} />
      <br />
      <br />
      <SortArrayAscendingWithCompreFunc arr={intArray} />
      <br />
      <br />
      <SortArrayDescending arr={intArray} />
      <br />
      <br />
      <SortStringAscending arr={strgArray} />
      <br />
      <br />
      <SortStringReverse arr={strgArray} />
      <br />
      <br />
      <SortStringUsingToSortedMethod arr={strgArray} />
      <br />
      <br />
      <ArrayForeachLoop />
      <br />
      <br />
      <ArrayMap arr={intArray} />
      <br />
      <br />

      <ArrayEveryWithuseEffectuseRef arr={intArray} />
      <br />
      <br />
      <UseStateStoreValueLetReactRender arr={intArray} />
      <br />
      <br />
      <ArrayUpdateUsingUseState />
      <br />
      <br />

      <ShowPosts />
      <br />
      <br />

      <APIAxiosGetRequestUseEffectNoDepcy />

      <br />
      <br />
      <ArrayFilterToUpdateArray />
      <br />
      <br />
      <UseEffectAsyncAwaitNeedsCleanup />
      <br />
      <br />
      <APIAxiosPostRequest />
      <br />
      <br />
      <APIAxiosGetRequestHandleError />

      <br />
      <br />
      <FormSubmitWithData />

      <br />
      <br />
      <FormWithInputControl />
      <br />
      <br />
      <FormWithMultipleInputs />
      <br />
      <br />

      <ReactingToInputsWithState />
      <br />
      <br />
      <PreservingNResettingState/>

            <br />
      <br />
    </div>
    </>
  );
};

export default ButtonContainers;
