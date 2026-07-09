# Athlete Performance Tracker

## Project Overview

The Athlete Performance Tracker is a full-stack web application designed to help athletes record and monitor their workout sessions. Users can add workouts, track their performance, edit existing sessions, delete sessions, and view training statistics.

This project was developed using React for the frontend, Express for the backend, and SQLite for persistent data storage.

---

## Features

- Add new workout sessions
- View all workout sessions
- Edit existing workout sessions
- Delete workout sessions
- Track workout duration
- Record performance scores
- Record workout dates
- View workout statistics
- Persistent data storage using SQLite

---

## Technologies Used

### Frontend
- React
- React Router
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Database
- SQLite

---

## CRUD Operations

This project implements all four CRUD operations:

- **Create** – Add a new workout session
- **Read** – Display all workout sessions
- **Update** – Edit an existing workout session
- **Delete** – Remove a workout session

All CRUD operations interact with the SQLite database.

---

## Project Pages

- Home
- Dashboard
- Add Session
- Stats
- Goals
- Profile

---

## How to Run the Project

### Install dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd server
npm install
```

### Start the backend

```bash
cd server
node server.js
```

### Start the frontend

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## Database

The application uses a SQLite database named:

```
sessions.db
```

The database stores workout sessions with:

- ID
- Workout Name
- Duration
- Performance Score
- Date

---

## Future Improvements

- User authentication
- Goal progress tracking
- Charts and graphs
- Workout filtering and searching
- Mobile-friendly responsive design

---

## Author

**Favour Anyaele**

Stetson University

Summer 2026

CINF 301 – Web Application Development