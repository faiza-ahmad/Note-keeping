import React, { useState } from "react";

const CreateNote = (props) => {
const [expand,setExpand]=useState()

 const [note,setNote]=useState({
   title:"",
   content:"",
 });
    const InputEvent =(event)=>{
      const {name,value}=event.target;
      setNote((prevData) =>{
        return{
          ...prevData,
          [name] :value,
        };
      });
    };
    const addEvent=(event)=>{
      event.preventDefault();
      props.passNote(note);
      setNote({
        title:"",
        content:"",
      });
    };
 const expandIt = () =>{
      setExpand(true);
 }
 const btoNormal = () =>{
  setExpand(false);
}
  return (
    <>
    <div className="main_note" onDoubleClick={btoNormal}>
        <form>
           { expand?
            <input type="text" 
            name="title"
            value={note.title} 
            onChange={InputEvent}
             placeholder="Title"
              /> : null}
            <textarea 
            name="content"
            rows="" 
            column=""
             value={note.content}
            onChange={InputEvent}
            placeholder="Write your notes..."
            onClick={expandIt}
            autoComplete="off"
            >
            </textarea>
            <button onClick={addEvent} className="plus_sign">
                +
            </button>
        </form>
    </div>
    </>
  );
};

export default CreateNote;
