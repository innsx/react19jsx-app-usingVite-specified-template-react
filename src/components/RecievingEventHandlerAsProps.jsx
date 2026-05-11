
// This component receives an event handler as a prop and uses it in the onClick event of a button.
export default function RecievingEventHandlerAsProps({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
