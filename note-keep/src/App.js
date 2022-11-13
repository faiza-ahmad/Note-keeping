import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <CreateNote />
      <Note />
    </div>
  );
}

export default App;
