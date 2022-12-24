import React, { useState,useEffect } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Sidebar from "./Sidebar";
const getLocaleStorage = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
function Side() {
  
  const [addItem, setAddItem] = useState(getLocaleStorage());
  const addNote = (note) => {
    // alert("clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(addItem))
  }, [addItem]);
  return (
    <div>
      <div className="body">
        <Sidebar />
      </div>
      <div>
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      </div>
    </div>
  );
}

export default Side;
