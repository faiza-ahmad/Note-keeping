import React, { useState } from "react";

const CreateNote = (props) => {
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
    }
    const addEvent=()=>{
      props.passNote(note);
      setNote({
        title:"",
        content:"",
      })
    };
 
  return (
    <>
    <div className="main_note">
        <form>
            <input type="text" 
            name="title"
            value={note.title} 
            onChange={InputEvent}
             placeholder="Title" />
            <textarea 
            name="content"
            rows="" 
            column=""
             value={note.content}
            onChange={InputEvent}
            placeholder="Write your notes..."/>
            
            <button onClick={addEvent}
            className="plus_sign">+</button>
        </form>
    </div>
    </>
  );
};

export default CreateNote;
