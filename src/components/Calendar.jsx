import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../App.css';

class CalendarComponent extends Component {
  state = {
    date: new Date(),
    event: '',
    events: [],
  };

  onChange = (date) => {
    this.setState({ date });
  };

  onEventChange = (event) => {
    this.setState({ event });
  };

  addEvent = () => {
    const { date, event, events } = this.state;
    if (event.trim() !== '') {
      events.push({ date, event });
      this.setState({ events, event: '' });
    }
  };

  handleDateDoubleClick = (date) => {
    const { event, events } = this.state;
    if (event.trim() !== '') {
      events.push({ date, event });
      this.setState({ events, event: '' });
    }
  };

  render() {
    return (
      <div className="Calendar">
        <div className="calendar-container">
          <div className="calendar">
            <Calendar
              onChange={this.onChange}
              onDoubleClick={this.handleDateDoubleClick}
              value={this.state.date}
            />
          </div>
          <div className="event-container">
            <h2>Add Event</h2>
            <input
              type="text"
              value={this.state.event}
              onChange={(e) => this.onEventChange(e.target.value)}
              placeholder="Enter an event"
            />
            <button className="add-button" onClick={this.addEvent}>
              Add Event
            </button>
          </div>
        </div>
        <div className="event-list">
          <h2>Event List</h2>
          <ul>
            {this.state.events.map((event, index) => (
              <li key={index}>
                <span className="event-date">
                  {event.date.toDateString()}:
                </span>
                {event.event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Calendar;
