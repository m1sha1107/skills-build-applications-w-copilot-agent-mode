import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://improved-sniffle-r4grjg5p96jq2pq47-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2>Workouts</h2>
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
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
