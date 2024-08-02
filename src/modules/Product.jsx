const Product = ( { product : { image, title, price } }) => {
  return (
    <li className="products__item">
      <article className="product">
        <img className="product__image" src={image} alt={title}/>

        <div className="product__content">
          <h3 className="product__title">{title}</h3>

          <p className="product__price">{price} ₽</p>
        </div>
      </article>
    </li>
  );
};

export { Product };