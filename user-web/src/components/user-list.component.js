import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../common.css";

// Example items, to simulate fetching from another resources.
const items = [
  {
    id: 1,
    name: "Radowski",
    firstName: "Sebastian",
    phone: "+4915158223840",
    street: "Nobelstarße 26",
    city: "Ingolstadt",
    postalcode: "85051",
    country: "Germany",
    birthday: "2004-01-21T00:00:00.000+00:00",
    gender: "Male",
    nationality: "German",
  },
  {
    id: 11,
    name: "Radowski122",
    firstName: "Sebastian",
    phone: "+4915158223840",
    street: "Nobelstarße 26",
    city: "Ingolstadt",
    postalcode: "85051",
    country: "Germany",
    birthday: "2004-11-21T00:00:00.000+00:00",
    gender: "Male",
    nationality: "German",
  },
];
function UserItem({ user }) {
  const dob = new Date(user.birthday);
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
              <p>
                {user.street}, {user.city},{user.nationality}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Items({ currentItems }) {
  return (
    <div className="user-items-list">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.name}>
            <UserItem user={item} />
          </div>
        ))}
    </div>
  );
}

function UsersList({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
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
