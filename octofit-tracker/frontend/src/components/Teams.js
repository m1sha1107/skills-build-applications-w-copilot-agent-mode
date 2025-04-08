import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://improved-sniffle-r4grjg5p96jq2pq47-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2>Teams</h2>
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
            {teams.map(team => (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
