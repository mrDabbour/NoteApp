import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notesData from "../notesData.json"; // Import the JSON file

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5; // Number of notes to display per page

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notesData.slice(indexOfFirstNote, indexOfLastNote);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Header />
      <h1>Hello App</h1>
      {currentNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      <Footer
        notesPerPage={notesPerPage}
        totalNotes={notesData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
