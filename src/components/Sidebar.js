import React from "react";

function Sidebar({ setActiveComponent }) {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "240px"}}>
      <button
        className="btn btn-light w-100 mb-3  mt-5"
        onClick={() => setActiveComponent("Dashboard")}
      >
        Dashboard
      </button>
      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setActiveComponent("ManageProducts")}
      >
        Manage Products
      </button>
      
      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setActiveComponent("Visitors")}
      >
        Visitors
      </button>
      <button
        className="btn btn-light w-100 mb-3"
        onClick={() => setActiveComponent("Orders")}
      >
        Orders
      </button>
    </div>
  );
}

export default Sidebar;
