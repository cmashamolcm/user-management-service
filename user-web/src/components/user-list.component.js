import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "../common.css";
import { deleteUser, getAllUsers } from "../services/user-service";

// Example items, to simulate fetching from another resources.
const items = [];
function UserItem({ user, deleteUser }) {
  const dob = new Date(user.birthday);

  const handleDelete = (event) => {
    deleteUser(user.id);
  };

  return (
    <>
      {user && (
        <div className="card">
          <div className="container">
            <h4>
              <b>
                {user.firstName} {user.name}
              </b>
            </h4>
            <div>
              {dob.getDate()} {dob.toLocaleString("default", { month: "long" })}{" "}
              {dob.getFullYear()}
            </div>
            <br />
            <div>
              <i>
                {user.street}, {user.city},{user.nationality}
              </i>
            </div>
          </div>
          <Link to={"/user/" + user.id}>
            <button className="btn btn-primary">Edit</button>
          </Link>
          <button className="btn btn-primary deletebtn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

function Items({ currentItems, deleteUser }) {
  return (
    <div className="user-items-list">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id}>
            <UserItem user={item} deleteUser={deleteUser} />
          </div>
        ))}
    </div>
  );
}

function UsersList({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [searchString, setSearchString] = useState(null);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const loadUsers = function () {
    getAllUsers(itemOffset, itemsPerPage, searchString)
      .then((response) => {
        let users = response.data;
        console.log(users);
        setCurrentItems(users.content);
        setPageCount(users.totalPages);
      })
      .catch((error) => console.log(error));

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  };
  useEffect(() => {
    // Fetch users by API call.
    loadUsers();
    //setCurrentItems(items.slice(itemOffset, endOffset));
    //setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchString]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const deleteUserWithId = function (id) {
    deleteUser(id)
      .then((response) => {
        loadUsers();
        console.log(id, currentItems);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="add-user">
        <label>Search User:</label>
        <input type="text" onChange={(e) => setSearchString(e.target.value)} />
      </div>

      <Items currentItems={currentItems} deleteUser={deleteUserWithId} />
      <ReactPaginate
        className="page-group"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default UsersList;
