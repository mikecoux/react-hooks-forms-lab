import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("Search...")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItem(event.target.value);
  }

  const itemsToDisplay = items
  .filter((item) => {
    if (searchedItem === "Search...") return true;

    return item.name.toLowerCase().includes(searchedItem.toLowerCase())
  })
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onNewItem}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={handleSearchChange} 
      search={searchedItem}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
