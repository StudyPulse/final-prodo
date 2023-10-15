import React from "react";
import { ReactDOM } from "react";
import "./Notes.css";
import { useState } from "react";

export default function Notes() {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("Enter the Notes Title");

  const handleNoteTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleNotesTitleClick = (note) => {
    setCurrentNote(note.content);
    setNoteTitle(note.title);
  };

  const handleNotesChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handleAddNote = () => {
    if (currentNote.trim() !== "") {
      setNotesList((prevList) => [
        ...prevList,
        { title: noteTitle, content: currentNote },
      ]);
      setCurrentNote("");
      setNoteTitle("Enter the Notes Title");
    }
  };
  const handleDeleteNote = () => {
    if (currentNote.trim() !== "") {
      setNotesList((prevList) =>
        prevList.filter((note) => note.content !== currentNote)
      );
      setCurrentNote("");
      setNoteTitle("Enter the Notes Title");
    }
  };

  return (
    <>
      <div className="notes-main">
        <div className="blank-space">
          <input
            className="notes-title-name"
            type="text"
            value={noteTitle}
            onChange={handleNoteTitleChange}
          />
        </div>
        <div className="text-area">
          <textarea
            name="notes"
            id="notes"
            value={currentNote}
            onChange={handleNotesChange}
          ></textarea>
          <button className="save-button" onClick={handleAddNote}>
            Save
          </button>
          <button className="delete-button" onClick={handleDeleteNote}>
            Delete
          </button>
        </div>
      </div>
      <div className="notes-list">
        {notesList.map((note, index) => (
          <div
            className="notes-title"
            key={index}
            onClick={() => handleNotesTitleClick(note)}
          >
            {note.title}
          </div>
        ))}
      </div>
    </>
  );
}
