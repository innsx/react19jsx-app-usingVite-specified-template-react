import { useState } from "react";

export default function FormSubmitWithData() {
  const [formData, setFormData] = useState({
    name: "", // Initialize name and email fields in the form data state
    email: "", // Initialize name and email fields in the form data state
  });

  const handleChange = (e) => {
    // Destructure name and value from the event target
    const { name, value } = e.target;

    // Update the form data state by spreading the previous form data and updating the specific field that changed
    setFormData((prevData) => ({
      // Spread the previous form data and update the specific field that changed
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // When you interact with a web page—like clicking a link or submitting a form—the browser has "built-in" actions it performs automatically. 
    // Calling preventDefault() tells the browser, "Don't do that; I'll handle it myself with code instead".
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "" }); // Clear the form data state after submission

    alert(`Form submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="nameId" // Set the id attribute for accessibility
            name="name" // Set the name attribute to match the corresponding state field
            value={formData.name} // Set the value of the input to the corresponding state value
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="emailId" // Set the id attribute for accessibility
            name="email" // Set the name attribute to match the corresponding state field
            value={formData.email} // Set the value of the input to the corresponding state value
            onChange={handleChange}
          />
        </div>
        <br />
        <button className="btn" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
}
