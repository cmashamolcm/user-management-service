import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../common.css";
import { createUser, getUser } from "../services/user-service";

export default function AddUser({ buttonLabel, backToUrl, submitAction }) {
  const [user, setUser] = useState({});
  const { id } = useParams();
  if (!submitAction) {
    submitAction = createUser(user);
  }

  useEffect(() => {
    getUser(id)
      .then((response) => {
        let user = response.data;
        user.birthday = new Date(user.birthday).toISOString().split("T")[0];
        setUser(user);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAction(user);
  };

  return (
    <div className="edit-user">
      <div className="back">
        {backToUrl && (
          <Link to={backToUrl}>
            <button className="btn btn-primary">Back</button>
          </Link>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="add-user">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName || ""}
            onChange={handleChange}
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={user.city || ""}
            onChange={handleChange}
          />

          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={user.street || ""}
            onChange={handleChange}
          />

          <label>Postal Code:</label>
          <input
            type="text"
            name="postalcode"
            value={user.postalcode || ""}
            onChange={handleChange}
          />

          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={user.country || ""}
            onChange={handleChange}
          />

          <label>Birth Day:</label>

          <input
            type="date"
            name="birthday"
            value={user.birthday || ""}
            onChange={handleChange}
          />

          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={user.gender || ""}
            onChange={handleChange}
          />

          <label>Birth Day:</label>
          <input
            type="text"
            name="nationality"
            value={user.nationality || ""}
            onChange={handleChange}
          />
          <div>
            <input type="submit" value={buttonLabel} />
          </div>
        </div>
      </form>
    </div>
  );
}
