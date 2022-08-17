import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import AddUser from "./components/add-user.component";
import User from "./components/user.component";
import UsersList from "./components/user-list.component";

import "./App.css";

class App extends Component {
  render(props) {
    return (
      <div className="main">
        <h1>User Management</h1>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    );
  }
}
export default App;
