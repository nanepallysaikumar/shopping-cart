import remove from "../../../../images/remove.png";
import "./CartCard.css";

const CartCard = (data) => {
  const { image, title, author, description, price, removeProduct } = data;
  return (
    <div className="cart">
      <div>
        <img src={image} height="150" width="150" />
      </div>
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
      <div>
        <img src={remove} height="30" onClick={() => removeProduct(data)} />
        <p>Remove from Cart</p>
      </div>
    </div>
  );
};

export { CartCard };
