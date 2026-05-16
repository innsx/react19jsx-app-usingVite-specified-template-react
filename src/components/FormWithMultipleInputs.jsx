import React from "react";

export default function FormWithMultipleInputs() {
  const userModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [inputs, setInputs] = React.useState(userModel);
  const [comment, setComment] = React.useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <form className="formStyle">
        <label className="alignFormMargin">
          First name:
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        
        <br />
        <label className="alignFormMargin">
          Last name:
          <input
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="alignFormMargin">
          Email:
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <br />
        
        <label className="alignFormMargin">
          Password:
          <input
            type="password"
            name="password"
            value={inputs.password} 
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Comments:
          <textarea name="comment" value={comment} onChange={(e) => {setComment(e.target.value)}}></textarea>
        </label>
        <br />
        <br />
        <p className="textAlignleft">Current values: </p>
     
        <div className="textAlignleft">
          {inputs.firstName} {""}
          {inputs.lastName} {<br />}
          {inputs.email} {<br />}
          {inputs.password}
          <br />
          {comment}
        </div>
      </form>
    </>
  );
}
