"use client";
import React, { useContext, useState } from "react";
import { NoteContext } from "@/context/NoteContext";
import { AiOutlineDelete, AiOutlineDown, AiOutlineEdit } from "react-icons/ai";

export default function Note(props) {
  const { notes, deleteNote, updateNote } = useContext(NoteContext);
  const [isDisabled, setDisabled] = useState(true);
  const [expand, setExpand] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const handleUpdate = (index) => {
    setDisabled(true);
    const time = Date.now();
    const date = new Date(time);
    updateNote(
      updatedTitle,
      updatedDesc,
      props.note.color,
      index,
      date.toDateString()
    );

    console.log(updatedTitle);
    console.log(updatedDesc);
  };
  const handleEdit = (note) => {
    setDisabled(false);
    setUpdatedTitle(note.title);
    setUpdatedDesc(note.description);
  };
  return (
    <div
      className={`w-[300px]  rounded-2xl   px-5 py-5 ease-in-out duration-200 ${
        !expand ? " h-[140px]" : "h-[400px]"
      }`}
      style={{ backgroundColor: props.note.color }}
    >
      {isDisabled ? (
        <>
          <div className=" flex h-[50px] justify-between items-center">
            <h2 className=" text-xl font-bold">{props.note.title}</h2>
            <AiOutlineDown
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              size={22}
              className={`${expand && "rotate-180"}`}
            />
          </div>

          <p
            className={` break-words duration-200 ease-in-out ${
              !expand ? "h-[0px] hidden " : "h-[236px]"
            } mt-3`}
          >
            {props.note.description}
          </p>
          <div className=" h-[50px] mt-3  flex items-center justify-between">
            <p className=" text-sm">{props.note.time}</p>
            {expand && (
              <div className=" flex space-x-3">
                <div
                  onClick={() => deleteNote(props.index)}
                  className="flex justify-center items-center bg-black text-white rounded-full w-[35px] h-[35px]"
                >
                  <AiOutlineDelete size={20} />
                </div>
                <div
                  onClick={() => handleEdit(props.note)}
                  className="flex justify-center items-center bg-black text-white rounded-full w-[35px] h-[35px]"
                >
                  <AiOutlineEdit size={20} />
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedTitle}
            placeholder="title"
            className="outline-none text-xl h-[50px] font-bold bg-transparent w-full "
            onChange={(e) => setUpdatedTitle(e.target.value)}
            disabled={isDisabled}
          ></input>
          <textarea
            type="text"
            value={updatedDesc}
            placeholder="content"
            className=" outline-none h-[236px] mt-3 bg-transparent w-full "
            onChange={(e) => setUpdatedDesc(e.target.value)}
            disabled={isDisabled}
          ></textarea>

          <button
            className=" mt-5 px-5 py-2 text-sm bg-black text-white rounded-xl"
            onClick={() => handleUpdate(props.index)}
          >
            Update
          </button>
        </>
      )}
    </div>
  );
}
