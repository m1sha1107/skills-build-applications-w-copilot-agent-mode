import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://improved-sniffle-r4grjg5p96jq2pq47-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2>Users</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
