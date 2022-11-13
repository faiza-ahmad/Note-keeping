import React from "react";
const Note = (props) => {
 
   const deleteNote = () =>{
     props.deleteItem(props.id);
};
  return (
    <>
    <div className="note">
<h1>{props.title}</h1>
<br/>
 <p> {props.content}</p>
 <button className="btn -deleteIcon" onClick={deleteNote}>
 <i className="fa-solid fa-trash"></i>
</button>
</div>
    </>
  );
};

export default Note;
