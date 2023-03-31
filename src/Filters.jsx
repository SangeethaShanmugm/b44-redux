import React, { useState } from "react";

function Filters() {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];
  const [filteredSearch, setFilteredSearch] = useState(list);
  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilteredSearch(list);
      return;
    }
    const filteredValue = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilteredSearch(filteredValue);
  };

  return (
    <div>
      <h1>Filters</h1>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filteredSearch &&
        filteredSearch.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
}

export default Filters;
