import { useState } from "react";

function AddSession() {
  const [workout, setWorkout] = useState("");
  const [duration, setDuration] = useState("");

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
        duration
      })
    });

    setWorkout("");
    setDuration("");

    alert("Session added!");
  };

  return (
    <div>
      <h1>Add Session</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Workout"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        />

        <input
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddSession;