import { useState } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";


const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export default function PreservingNResettingState() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      {" "}
      <h3>PreservingNResettingState</h3>
      <br />
      <ContactList
        contacts={contacts}
        selectContact={to}
        onSelect={(contact) => setTo(contact)}
      ></ContactList>
       <Chat key={to.email} contact={to} />
    </div>
  );
}
