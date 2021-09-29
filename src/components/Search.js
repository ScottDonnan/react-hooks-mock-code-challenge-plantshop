import React, {useState} from "react";

function Search({handleSearch}) {
  const [search, setSearch] = useState([])
  
  function searchBar(e){
    setSearch(e.target.value)
    handleSearch(e.target.value)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => searchBar(e)}
      />
    </div>
  );
}

export default Search;
