import { useAppSelector, useAppDispatch } from "../app/store";
import {
  removeFromCart,
  clearCart,
  updateQuantity,
  CartItem,
} from "../features/cart/cartSlice";
import "../styles/cart.scss";

const Cart = () => {
  const items = useAppSelector((s) => s.cart.items);
  const dispatch = useAppDispatch();

  const total = items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="title">Shopping Cart</div>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map((item: CartItem) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Rp{item.price?.toLocaleString("id-ID")}</p>
            <div>
              <label>Qty:</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      productId: item.id,
                      quantity: Number(e.target.value),
                    })
                  )
                }
              />
            </div>
            <p className="subtotal">
              Subtotal: Rp{(item.price * item.quantity)?.toLocaleString("id-ID") ?? "0"}
            </p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}
      {items.length > 0 && (
        <div className="cart-summary">
          <div className="total">Total: Rp{total.toLocaleString("id-ID")}</div>
          
          <div className="actions">
            <button className="clear" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
