import "./SearchBar.style.scss";

const SearchBar = ({ searchTerm }) => {
    return (
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => console.log(e.target.value)}
        />
        <button>Search</button>
      </div>
    );
  };
  
  export default SearchBar;