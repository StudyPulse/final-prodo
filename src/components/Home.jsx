import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Pomodoro from "./Pomodoro";
import Notes from "./Notes";
import Calendar from './Calendar';
import "../components/login.css";
import Dashboard from "./dashboard";
import Kanban from './Kanban';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center main-login">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div>
        <Dashboard />
        <Link to="/pomodoro" className="link">
          Pomodoro
        </Link>
        <Link to="/notes" className="link">
          Notes
        </Link>
        <Link to="/calendar" className="link">
          Calendar
        </Link>
        <Link to="/kanban" className="link">
          Kanban
        </Link>
      </div>
    </>
  );
};

export default Home;