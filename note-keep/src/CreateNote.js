import React from "react";
// import Button from '@mui/material/Button';
// import AddIcon from '@material-ui/icon/Add';
const CreateNote = () => {
  return (
    <>
    <div className="main_note">
        <form>
            <input type="text" placeholder="Title" />
            <textarea rows="" column="" placeholder="Write your notes..."/>
            <button className="btn">+</button>
        </form>
    </div>
    </>
  );
};

export default CreateNote;
