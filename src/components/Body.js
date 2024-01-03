import React from "react";
import GroceriesCard from "./GroceriesCard";
import Items_data from "../common/mock_data";
import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredGroceries, setFilteredGroceries] = useState(Items_data);

  function handleOnChangeEvent(e) {
    setSearchText(e.target.value);
  }

  function filterGroceriesList() {
    const filterData = Items_data.filter((items) => {
      return items.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredGroceries(filterData);
  }
    return (
      <>
      <div className='search-bar'>
      <input type='text' placeholder='Search for items...' onChange={handleOnChangeEvent}></input>
      <button onClick={filterGroceriesList}>Search</button>
    </div>
  
  <div className='Items-container'>
    {filteredGroceries.map((Items) => {
      return (
        <GroceriesCard
          key={Items.id}
          card_details={Items}
        />
      );
    })}
  </div>
        
      </>
      
     
    );
  };

  export default Body;