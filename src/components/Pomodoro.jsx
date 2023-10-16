import React, { Component } from "react";
import "../App.css";

class PomodoroTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25 * 60, // 25 minutes in seconds
      shortBreakTime: 5 * 60, // 5 minutes in seconds
      longBreakTime: 15 * 60, // 15 minutes in seconds
      currentTime: 25 * 60, // Start with the work time
      isRunning: false,
      currentMode: "work", // Initial mode is work
    };
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.state.currentTime > 0) {
        this.setState((prevState) => ({
          currentTime: prevState.currentTime - 1,
          isRunning: true,
        }));
      } else {
        this.handleTransition();
      }
    }, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState((prevState) => ({
      currentTime: prevState.workTime,
      isRunning: false,
      currentMode: "work",
    }));
  };

  handleTransition = () => {
    clearInterval(this.timer);
    const { currentMode, workTime, shortBreakTime, longBreakTime } = this.state;

    if (currentMode === "Work") {
      this.setState({
        currentMode: "shortBreak",
        currentTime: shortBreakTime,
      });
    } else if (currentMode === "shortBreak") {
      this.setState({
        currentMode: "work",
        currentTime: workTime,
      });
    } else if (currentMode === "longBreak") {
      this.setState({
        currentMode: "work",
        currentTime: workTime,
      });
    }
  };

  setShortBreak = () => {
    this.setState({
      currentMode: "shortBreak",
      currentTime: this.state.shortBreakTime,
    });
  };
  setLongBreak = () => {
    this.setState({
      currentMode: "longBreak",
      currentTime: this.state.longBreakTime,
    });
  };

  setFocusTime = () => {
    this.setState({ currentMode: "work", currentTime: this.state.workTime });
  };

  render() {
    const { currentTime, isRunning, currentMode } = this.state;

    return (
      <div>
        <div className="main">
          <h1>Pomodoro Timer</h1>
          <div className="timer">
            {Math.floor(currentTime / 60)
              .toString()
              .padStart(2, "0")}
            :{(currentTime % 60).toString().padStart(2, "0")}
          </div>
          <div className="mode">Current Mode: {currentMode}</div>
          <div className="controls">
            <button onClick={this.startTimer} disabled={isRunning}>
              Start
            </button>
            <button onClick={this.pauseTimer} disabled={!isRunning}>
              Pause
            </button>
            <button onClick={this.resetTimer}>Reset</button>
            <div className="breaks">
              {" "}
              <button onClick={this.setShortBreak}>Short Break</button>
              <button onClick={this.setLongBreak}>Long Break</button>
            </div>
            <button className="focus" onClick={this.setFocusTime}>
              Focus
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;
