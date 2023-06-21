"use client";
import React, { useContext, useState } from "react";
import { NoteContext } from "@/context/NoteContext";

const SearchNote = () => {
  const [searchText, setSearchText] = useState("");

  const { searchNote } = useContext(NoteContext);
  const handleSearch = (text) => {
    searchNote(text);
  };

  return (
    <input
      type="search"
      placeholder="search title"
      className=" px-10 w-1/2 py-3  bg-gray-200 rounded-lg "
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchNote;
