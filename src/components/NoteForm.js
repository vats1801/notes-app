"use client";
import React, { useState, useContext, useRef } from "react";
import { NoteContext } from "@/context/NoteContext";
import { BiSelectMultiple } from "react-icons/bi";

export default function NoteForm({ setShow }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");
  const { addNote } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !desc) {
      alert("Please enter title or content");
    } else {
      const time = Date.now();
      const date = new Date(time);

      addNote(title, desc, color, date.toDateString());
      setShow(false);
      setTitle("");
      setDesc("");
      setColor("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="  bg-gray-400 w-[300px] p-5 rounded-lg space-y-5"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        className=" w-full h-[50px] px-5"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        className=" w-full pt-5  px-5"
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <div className=" flex space-x-3 ">
        <div
          onClick={() => setColor("#d25dd4")}
          className=" flex justify-center items-center border-2 border-black w-[40px] h-[40px] bg-[#d25dd4] rounded-lg"
        >
          {color === "#d25dd4" && <BiSelectMultiple size={20} />}{" "}
        </div>
        <div
          onClick={() => setColor("#81D1DC")}
          className=" flex justify-center items-center border-2 border-black w-[40px] h-[40px] bg-[#81D1DC] rounded-lg"
        >
          {color === "#81D1DC" && <BiSelectMultiple size={20} />}{" "}
        </div>
        <div
          onClick={() => setColor("#5dd483")}
          className=" flex justify-center items-center border-2 border-black w-[40px] h-[40px] bg-[#5dd483] rounded-lg"
        >
          {color === "#5dd483" && <BiSelectMultiple size={20} />}{" "}
        </div>
        <div
          onClick={() => setColor("#5dd4b1")}
          className=" flex justify-center items-center border-2 border-black w-[40px] h-[40px] bg-[#5dd4b1] rounded-lg"
        >
          {color === "#5dd4b1" && <BiSelectMultiple size={20} />}{" "}
        </div>
        <div
          onClick={() => setColor("#F6E97F")}
          className=" flex justify-center items-center border-2 border-black w-[40px] h-[40px] bg-[#F6E97F] rounded-lg"
        >
          {color === "#F6E97F" && <BiSelectMultiple size={20} />}{" "}
        </div>
      </div>
      <button
        className=" bg-black w-full text-white rounded-xl px-5 py-2"
        type="submit"
      >
        Add Note
      </button>
    </form>
  );
}
