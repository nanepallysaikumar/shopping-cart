import addcart from "../../../../images/addcart.png";
import "./ProductCard.css";

const ProductCard = (data) => {
  const {
    image,
    title,
    author,
    price,
    description,
    handleCart,
    animate,
    animationEnd,
    cartPosition
  } = data;
  return (
    <section className="product-section">
      <div className="cart-icon">
        <img
          src={addcart}
          height="50"
          width="60"
          onClick={(e) => handleCart(e, data)}
        />
        {animate && (
          <div
            className="fly-to-cart"
            style={{
              top: cartPosition.y,
              left: cartPosition.x,
            }}
            onAnimationEnd={animationEnd}
          />
        )}
      </div>
      <div className="product-card">
        <div>
          <img src={image} height="150" width="150" />
        </div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export { ProductCard };
