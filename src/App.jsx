import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddSession from "./pages/AddSession";
import Stats from "./pages/Stats";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-session" element={<AddSession />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;