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
      method: "DELETE",
    });

    loadSessions();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Athlete Dashboard</h1>

      <div style={{ maxWidth: "800px", margin: "30px auto" }}>
        {sessions.map((session) => (
          <div
            key={session.id}
            style={{
              backgroundColor: "white",
              borderLeft: "6px solid #1E3A8A",
              borderRadius: "12px",
              padding: "22px",
              marginBottom: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#1E3A8A" }}>{session.workout}</h2>

            <p><strong>Date:</strong> {session.date}</p>
            <p><strong>Duration:</strong> {session.duration} minutes</p>
            <p><strong>Performance Score:</strong> {session.score}/10</p>

            <button
              onClick={() => deleteSession(session.id)}
              style={{
                backgroundColor: "#DC2626",
                color: "white",
                border: "none",
                padding: "10px 14px",
                borderRadius: "8px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Delete Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;