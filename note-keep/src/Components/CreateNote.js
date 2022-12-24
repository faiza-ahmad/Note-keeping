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
      if(!note.title || !note.content){
        alert("Field Could Not Be Empty");
        // return;
        // <Alert trigger={true}>
        //   Field Could not be Empty 
        // </Alert>
        return;
      }
      event.preventDefault();
      props.passNote(note);
      setNote({
        title:"",
        content:"",
      });
    };
 const expandIt = () =>{
      setExpand(false);
 }
 const btoNormal = () =>{
  setExpand(true);
}
  return (
    <>
    <div className="main_note" >
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
            onDoubleClick={btoNormal}
            autoComplete="off"
            >
            </textarea>
          { expand ? <button onClick={addEvent} className="plus_sign">
                +
            </button> : null }
        </form>
    </div>
    </>
  );
};

export default CreateNote;
