import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const Note = (props) => {

  function handleDeleteItem()
  {
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteItem}>
        <DeleteIcon/>
      </button>
    </div>
  )
}

export default Note
