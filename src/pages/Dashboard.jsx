import { useEffect, useState } from "react";

function Dashboard() {
  const [sessions, setSessions] = useState([]);

  const loadSessions = () => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((data) => setSessions(data));
  };

  useEffect(() => {
    loadSessions();
  }, []);

  const deleteSession = async (id) => {
    await fetch(`http://localhost:3000/sessions/${id}`, {
      method: "DELETE"
    });

    loadSessions(); // refresh after delete
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      {sessions.map((s) => (
        <div
          key={s.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{s.workout}</h3>
          <p>{s.duration} mins</p>

          <button onClick={() => deleteSession(s.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;