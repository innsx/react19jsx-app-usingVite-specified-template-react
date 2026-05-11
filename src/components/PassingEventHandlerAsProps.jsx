import RecievingEventHandlerAsProps from "./RecievingEventHandlerAsProps";

export default function PassingEventHandlerAsProps() {
  return (
    // Passing event handlers onClick={() => alert("Uploading!")} as props to child components.
    // The child component can then call the function when the event occurs.
    <div>
      <RecievingEventHandlerAsProps onClick={() => alert("Uploading!")}>
        Upload Image
      </RecievingEventHandlerAsProps>
    </div>
  );
}
