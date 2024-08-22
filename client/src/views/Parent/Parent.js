import React, { useState } from "react";
import "./Parent.css";

function Parent() {
  const [user, setUser] = useState("");
  const [student, setStudent] = useState("");

  return (
    <div>
      <h1 className="parent-heading text-center">Parent Form</h1>
      <form className="parent-form d-block border p-4 my-4 mx-auto w-50 bg-light-subtle rounded-2">
        <input
          type="text"
          placeholder="Enter User"
          className="parent-form-input d-block p-1 my-4 mx-auto w-75"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />

        <input
          type=""
          placeholder="Enter Student"
          className="parent-form-input d-block p-1 my-4 mx-auto w-75"
          value={student}
          onChange={(e) => {
            setStudent(e.target.value);
          }}
        />

        <button 
        type="button" 
        className="submit-btn d-block py-1 px-5 mt-4 my-4 mx-auto rounded-3  ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Parent;
