import React from "react";
import { ReactDOM } from "react";
import "../components/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-links">
        <img className="logo" src="src/components/logo.png" alt="logo" />
        <div>
          {/* <Dashboard /> */}
          <Link to="/pomodoro" className="link">
            Pomodoro
          </Link>
          <Link to="/notes" className="link">
            Notes
          </Link>
          <Link to="/calendar" className="link">
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
}
