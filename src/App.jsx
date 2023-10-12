import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Pomodoro from "./components/Pomodoro";
import Notes from "./components/Notes";
import Calendar from './components/Calendar';
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App
