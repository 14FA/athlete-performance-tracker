const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database("./sessions.db", (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create sessions table
db.run(`
  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout TEXT NOT NULL,
    duration INTEGER NOT NULL,
    score INTEGER NOT NULL,
    date TEXT NOT NULL
  )
`);

// =======================
// GET all sessions
// =======================
app.get("/sessions", (req, res) => {
  db.all("SELECT * FROM sessions", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve sessions" });
    } else {
      res.json(rows);
    }
  });
});

// =======================
// POST new session
// =======================
app.post("/sessions", (req, res) => {
  const { workout, duration, score, date } = req.body;

  db.run(
    "INSERT INTO sessions (workout, duration, score, date) VALUES (?, ?, ?, ?)",
    [workout, duration, score, date],
    function (err) {
      if (err) {
        res.status(500).json({ error: "Failed to add session" });
      } else {
        res.json({
          id: this.lastID,
          workout,
          duration,
          score,
          date,
        });
      }
    }
  );
});

// =======================
// UPDATE session
// =======================
app.put("/sessions/:id", (req, res) => {
  const id = req.params.id;
  const { workout, duration, score, date } = req.body;

  db.run(
    "UPDATE sessions SET workout = ?, duration = ?, score = ?, date = ? WHERE id = ?",
    [workout, duration, score, date, id],
    function (err) {
      if (err) {
        res.status(500).json({ error: "Failed to update session" });
      } else {
        res.json({
          message: "Session updated successfully",
        });
      }
    }
  );
});

// =======================
// DELETE session
// =======================
app.delete("/sessions/:id", (req, res) => {
  const id = req.params.id;

  db.run("DELETE FROM sessions WHERE id = ?", [id], function (err) {
    if (err) {
      res.status(500).json({ error: "Failed to delete session" });
    } else {
      res.json({
        message: "Session deleted successfully",
      });
    }
  });
});

// =======================
// Start server
// =======================
app.listen(3000, () => {
  console.log("Server running on port 3000");
});