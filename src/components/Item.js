import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState({ className: "", text: "Add to Cart" });
  function add() {
    if (inCart.className === "") {
      setCart({ ...inCart, className: "in-cart", text: "Remove from Cart" });
    } else {
      setCart({ ...inCart, className: "", text: "Add to Cart" });
    }
  }
  return (
    <li className={inCart.className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={add}>
        {inCart.text}
      </button>
    </li>
  );
}

export default Item;
