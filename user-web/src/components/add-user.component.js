import React from "react";
import "../common.css";

export default function AddUser() {
  return (
    <form>
      <div class="add-user">
        <label>First Name:</label>
        <input type="text" name="firstName" />

        <label>Last Name:</label>
        <input type="text" name="name" />

        <label>Phone:</label>
        <input type="text" name="phone" />

        <label>City:</label>
        <input type="text" name="city" />

        <label>Street:</label>
        <input type="text" name="street" />

        <label>Postal Code:</label>
        <input type="text" name="postalcode" />

        <label>Country:</label>
        <input type="text" name="country" />

        <label>Birth Day:</label>
        <input type="text" name="birthDay" />

        <label>Gender:</label>
        <input type="text" name="gender" />

        <label>Birth Day:</label>
        <input type="text" name="nationality" />

        <div>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
}
