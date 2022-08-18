import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/add-user.component";
import EditUser from "./components/edit-user.component";
import UsersList from "./components/user-list.component";

import "./App.css";

class App extends Component {
  render(props) {
    return (
      <div className="main">
        <h1>User Management</h1>
        <Routes>
          <Route path="/" element={<UsersList itemsPerPage={5} />} />
          <Route path="/users" element={<UsersList itemsPerPage={5} />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/user/:id" element={<EditUser />} />
        </Routes>
      </div>
    );
  }
}
export default App;
