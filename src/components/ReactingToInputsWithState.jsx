import { useState } from "react";

//With React, you won’t modify the UI from code directly.
// For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc.
// Instead, you will describe the UI you want to see for the different visual states
// of your component (“initial state”, “typing state”, “success state”),
// and then trigger the state changes in response to user input.
// This is similar to how designers think about UI.
export default function ReactingToInputsWithState() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    //a JavaScript function used to cancel the default action that a browser normally takes when a specific event occurs.
    // It tells the browser, "I’ll handle this myself; don't do what you usually do".
    //When you interact with a web page—like clicking a link or submitting a form—the browser has "built-in" actions it performs automatically.
    // Calling preventDefault() tells the browser, "Don't do that; I'll handle it myself with code instead".
    e.preventDefault();

    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          {" "}
          {/* reacting to input changes */}
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";

      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
