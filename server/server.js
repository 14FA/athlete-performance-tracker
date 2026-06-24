const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// fake database (stored in memory)
let sessions = [
  { id: 1, workout: "Basketball", duration: 90 },
  { id: 2, workout: "Weights", duration: 60 }
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

// start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});