import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [list, setList] = useState("All");
  // const [itemList, setItems] = useState(items);

  function handleChange(event) {
    setList(event.target.value);
  }

  const filteredList = items.filter((item) => {
    if (list === "All") {
      return true;
    } else {
      return item.category === list;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
