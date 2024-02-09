import React from "react";

function Footer({ notesPerPage, totalNotes, paginate, currentPage }) {
    
  return (
    <div>
      <footer>
          {/* Pagination */}
      <ul className="pagination">
      {Array.from({ length: Math.ceil(totalNotes / notesPerPage) }, (_, i) => i + 1).map((number) => (
    <li key={number} className={number === currentPage ? "active" : ""}>
        <button onClick={() => paginate(number)}>{number}</button>
    </li>
))}

      </ul>
    {/* Copyright notice */}
    <p>&copy; {new Date().getFullYear()} Your Note Name. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default Footer;
