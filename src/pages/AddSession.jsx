import { useState } from "react";

function AddSession() {
  const [workout, setWorkout] = useState("");
  const [duration, setDuration] = useState("");
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Date.now(),
        workout,
        duration,
        score,
        date
      })
    });

    setWorkout("");
    setDuration("");
    setScore("");
    setDate("");

    alert("Session added!");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Training Session</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "450px",
          margin: "30px auto",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <input
          placeholder="Workout name"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Duration in minutes"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Performance score 1-10"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Add Session</button>
      </form>
    </div>
  );
}

export default AddSession;