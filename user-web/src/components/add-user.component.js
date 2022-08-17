import React, { useState } from "react";
import "../common.css";
import userService from "../services/user-service";

export default function AddUser() {
  const [newUser, setNewUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="add-user">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName || ""}
          onChange={handleChange}
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="name"
          value={newUser.name || ""}
          onChange={handleChange}
        />

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={newUser.phone || ""}
          onChange={handleChange}
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={newUser.city || ""}
          onChange={handleChange}
        />

        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={newUser.street || ""}
          onChange={handleChange}
        />

        <label>Postal Code:</label>
        <input
          type="text"
          name="postalcode"
          value={newUser.postalcode || ""}
          onChange={handleChange}
        />

        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={newUser.country || ""}
          onChange={handleChange}
        />

        <label>Birth Day:</label>
        <input
          type="text"
          name="birthDay"
          value={newUser.birthDay || ""}
          onChange={handleChange}
        />

        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={newUser.gender || ""}
          onChange={handleChange}
        />

        <label>Birth Day:</label>
        <input
          type="text"
          name="nationality"
          value={newUser.nationality || ""}
          onChange={handleChange}
        />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
