import { useEffect, useState } from "react";

function Stats() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  }, []);

  const totalWorkouts = sessions.length;

  const totalMinutes = sessions.reduce((total, session) => {
    return total + Number(session.duration);
  }, 0);

  const averageScore =
    sessions.length > 0
      ? (
          sessions.reduce((total, session) => {
            return total + Number(session.score);
          }, 0) / sessions.length
        ).toFixed(1)
      : 0;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Performance Stats</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Total Workouts</h2>
          <p>{totalWorkouts}</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Total Training Time</h2>
          <p>{totalMinutes} minutes</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Average Score</h2>
          <p>{averageScore}/10</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;