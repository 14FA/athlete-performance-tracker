import { useEffect, useState } from "react";

function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editWorkout, setEditWorkout] = useState("");
  const [editDuration, setEditDuration] = useState("");
  const [editScore, setEditScore] = useState("");
  const [editDate, setEditDate] = useState("");

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

  const startEditing = (session) => {
    setEditingId(session.id);
    setEditWorkout(session.workout);
    setEditDuration(session.duration);
    setEditScore(session.score);
    setEditDate(session.date);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditWorkout("");
    setEditDuration("");
    setEditScore("");
    setEditDate("");
  };

  const saveUpdate = async (id) => {
    await fetch(`http://localhost:3000/sessions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        workout: editWorkout,
        duration: editDuration,
        score: editScore,
        date: editDate,
      }),
    });

    cancelEditing();
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
            {editingId === session.id ? (
              <>
                <input
                  value={editWorkout}
                  onChange={(e) => setEditWorkout(e.target.value)}
                  placeholder="Workout"
                />

                <input
                  type="number"
                  value={editDuration}
                  onChange={(e) => setEditDuration(e.target.value)}
                  placeholder="Duration"
                />

                <input
                  type="number"
                  value={editScore}
                  onChange={(e) => setEditScore(e.target.value)}
                  placeholder="Score"
                />

                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                />

                <button onClick={() => saveUpdate(session.id)}>
                  Save Update
                </button>

                <button onClick={cancelEditing}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h2 style={{ color: "#1E3A8A" }}>{session.workout}</h2>

                <p><strong>Date:</strong> {session.date}</p>
                <p><strong>Duration:</strong> {session.duration} minutes</p>
                <p><strong>Performance Score:</strong> {session.score}/10</p>

                <button
                  onClick={() => startEditing(session)}
                  style={{
                    backgroundColor: "#1E3A8A",
                    color: "white",
                    border: "none",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginRight: "10px",
                    marginTop: "10px",
                  }}
                >
                  Edit Session
                </button>

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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;