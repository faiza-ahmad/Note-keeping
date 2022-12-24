import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Sidebar from "./Sidebar";

function Side() {
  const [addItem, setAddItem] = useState([]);
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
  return (
    <div>
      <div className="body">
        <Sidebar />
      </div>
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
      <br />
    </div>
  );
}

export default Side;
