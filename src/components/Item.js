import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleCart() {
    setInCart((inCart) => !inCart)
  }
  const cartClass = inCart ? "in-cart" : ""
  const buttonCart = inCart ? "remove" : "add"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonCart} onClick={handleCart}>{inCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;