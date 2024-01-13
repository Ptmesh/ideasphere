import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import React, { useState } from "react";

function CreateArea(props) {

  const[expanded,setExpanded]=useState(false);



    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(e)
    {
       const{name , value}= e.target;
       setNote(prevNote=>{
        return{
            ...prevNote,
            [name]:value
        };
       });
    }

    function submitNoteClick(e)
    {
        props.onAdd(note);
        e.preventDefault();
        setNote({
          title:"",
          content:""
        });
    }

    function expandArea()
    {
      setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
        {expanded ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null}
        <textarea onClick={expandArea} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={expanded ? 3 : 1} />
       <Zoom in={expanded}><Fab onClick={submitNoteClick}>
          <AddOutlinedIcon/>
        </Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
