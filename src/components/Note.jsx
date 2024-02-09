import React from "react";

function Note({ note }) {

    return (
        <div>
        <br />
      <div className="note">
        <div className="author">{note.author}</div>
        <p className="content">{note.content}</p>
        <p className="date-time">
          Date: {note.date} | Time: {note.time}
        </p>
      </div>
      </div>
    );
  }
  
  export default Note;