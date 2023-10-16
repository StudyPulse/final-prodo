import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './animation/animation.json';
import { Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Dashboard from './components/dashboard';
import Pomodoro from "./components/Pomodoro";
import Notes from "./components/Notes";
import Calendar from './components/Calendar';
import Kanban from "./components/Kanban";
import { useNavigate, Link } from 'react-router-dom';

function App() {
  const [animationVisible, setAnimationVisible] = useState(true);

  useEffect(() => {
    // Simulate a delay for the animation
    const animationTimeout = setTimeout(() => {
      setAnimationVisible(false);
    }, 3000); // Adjust the timeout duration as needed

    // Clear the timeout if the component unmounts
    return () => clearTimeout(animationTimeout);
  }, []);

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            {animationVisible ? (
              <Lottie options={lottieOptions} height={400} width={400} />
            ) : (
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
                <Route
                  path="/pomodoro"
                  element={
                    <ProtectedRoute>
                      <Pomodoro />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/notes"
                  element={
                    <ProtectedRoute>
                      <Notes />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <ProtectedRoute>
                      <Calendar />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/kanban"
                  element={
                    <ProtectedRoute>
                      <Kanban />
                    </ProtectedRoute>
                  }
                />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            )}
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;


