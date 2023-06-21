"use client";
import React, { useContext, useState } from "react";
import { NoteContext } from "@/context/NoteContext";
import Note from "./Note";

export default function NoteList() {
  const { notes, searchedNotes, searchText } = useContext(NoteContext);

  return (
    <>
      {searchText ? (
        searchedNotes.length > 0 ? (
          <ul className=" grid grid-cols-4 gap-5">
            {searchedNotes.map((note, index) => (
              <li key={index}>
                <Note note={note} index={index} />
              </li>
            ))}
          </ul>
        ) : (
          <div className=" flex justify-center w-full">
            <img
              src="https://rpi.gov.bd/frontend/images/no-data.png"
              className=" w-[200px] h-[200px] object-cover "
            />
          </div>
        )
      ) : (
        <ul className="grid grid-cols-4 gap-5">
          {notes.map((note, index) => (
            <li key={index}>
              <Note note={note} index={index} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
