import React from "react";

function Visitors() {
  const visitors = [
    { id: 1, name: "Ammari", date: "2024-11-19", time: "10:00 AM" },
    { id: 2, name: "Ali Baba", date: "2024-11-19", time: "10:15 AM" },
    { id: 3, name: "Leyla Tazi", date: "2024-11-19", time: "10:30 AM" },
    { id: 4, name: "Kaoutar", date: "2024-11-19", time: "12:35 AM" },
    { id: 5, name: "Assmae", date: "2024-11-19", time: "15:33 AM" },
    { id: 6, name: "Yassmine", date: "2024-11-19", time: "15:40 AM" },
    { id: 7, name: "Haitem", date: "2024-11-19", time: "16:00 AM" },
    
  ];

  return (
    <div>
      <h1>Visitors</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor.id}>
              <td>{visitor.id}</td>
              <td>{visitor.name}</td>
              <td>{visitor.date}</td>
              <td>{visitor.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Visitors;
