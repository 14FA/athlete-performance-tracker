const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Fake database stored in memory
let sessions = [
  {
    id: 1,
    workout: "Basketball Practice",
    duration: 90,
    score: 8,
    date: "2026-07-03"
  },
  {
    id: 2,
    workout: "Weight Training",
    duration: 60,
    score: 9,
    date: "2026-07-02"
  },
  {
    id: 3,
    workout: "Conditioning",
    duration: 45,
    score: 7,
    date: "2026-07-01"
  }
];

// GET all sessions
app.get("/sessions", (req, res) => {
  res.json(sessions);
});

// POST new session
app.post("/sessions", (req, res) => {
  const newSession = req.body;
  sessions.push(newSession);
  res.json(newSession);
});

// DELETE session
app.delete("/sessions/:id", (req, res) => {
  const id = parseInt(req.params.id);

  sessions = sessions.filter((session) => session.id !== id);

  res.json({ message: "Session deleted successfully" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});