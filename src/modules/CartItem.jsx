const CartItem = ( { product : { image, title, price } }) => {
  return (
    <li className="cart-item">
      <img className="cart-item__image" src={image} alt={title}/>

      <div className="cart-item__info">
        <h3 className="cart-item__title">{title}</h3>

        <div className="cart-item__quantity">
          <button className="cart-item__quantity-button cart-item__quantity-button_minus">-</button>

          <input type="number" className="cart-item__quantity-input" value={1}/>

          <button className="cart-item__quantity-button cart-item__quantity-button_plus">+</button>

        </div>

        <p className="cart-item__price">{price}&nbsp;₽</p>
      </div>
    </li>
  );
};

export { CartItem } ;