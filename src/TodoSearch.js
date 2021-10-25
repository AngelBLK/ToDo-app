import React from "react";
import './TodoSearch.css';
function TodoSearch() {
  return (
    <section className="TodoSearch__container">
      <input className="TodoSearch__input" placeholder="Search..." />
    </section>
    
  );
}

export {TodoSearch};