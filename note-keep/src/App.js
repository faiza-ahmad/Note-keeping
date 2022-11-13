import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import './App.css';

function App() {
  const [addItem,setAddItem]=useState([]);
  const addNote=(note)=>{
    // alert("clicked")
    setAddItem((prevData)=>{
      return [...prevData,note];
    });

  };
  const onDelete=(id)=>{
      setAddItem((olddata) => 
      olddata.filter((currdata,indx)=>{
        return indx!==id;
      })
      )
  }
  return (
    <div className="App">
      <Header/>
      <CreateNote passNode={addNote} />
     {addItem.map((val,index)=>{
        return <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
      })}
      <Footer/>
    </div>
  );
}

export default App;
