import React from "react";
import './TodoSearch.css';
function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <section className="TodoSearch__container">
      <input className="TodoSearch__input"  
        placeholder="Search..." 
        value={searchValue}
        onChange={onSearchValueChange}  
      />
    </section>
    
  );
}

export {TodoSearch};