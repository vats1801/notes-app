"use client";

import React, { createContext, useState, useEffect } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, description, color, time) => {
    const newNote = { title, description, color, time };
    setNotes([...notes, newNote]);
  };

  const updateNote = (title, description, color, index, time) => {
    const newNote = { title, description, color, time };
    const updatedNotes = [...notes];
    updatedNotes[index] = newNote;
    setNotes(updatedNotes);
  };

  const searchNote = (text) => {
    setSearchText(text);
    setSearchedNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        searchNote,
        searchedNotes,
        searchText,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
