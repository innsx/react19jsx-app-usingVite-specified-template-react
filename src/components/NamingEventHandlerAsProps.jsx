function NamingEventHandlerAsProps({ onSmash, children }) {
  // when the button is clicked, it calls the onSmash function
  //which is passed as a prop from NamingEventHandlerAsProps component.
  //The onSmash function is an anonymous function that shows an alert with the message "Smash button clicked".
  return (
    <div>
      <button className="btn" onClick={onSmash}>
        {children}
      </button>
    </div>
  );
}

export default NamingEventHandlerAsProps;
