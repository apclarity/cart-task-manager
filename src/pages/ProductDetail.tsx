import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/store";
import { addToCart } from "../features/cart/cartSlice";
import { useState } from "react";
import "../styles/product-detail.scss";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) =>
    state.products.items.find((p) => p.id === id)
  );
  const isAuthenticated = !!localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert("Login to proceed");
      navigate("/login");
      return;
    }

    if (!product) return;

    dispatch(
      addToCart({
        product,
        quantity,
      })
    );

    navigate("/cart");
  };

  return (
    <div className="product-detail">
        {!product ? (
            <p className="not-found">Product not found</p>
        ) : (
            <div className="content">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="info-section">
          <h2>{product.name}</h2>
          <p className="price">
            Rp{product.price.toLocaleString("id-ID")}
          </p>

          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: product.description || ""}}
          />

          {product.material && (
            <div className="material">
              <h4>Material:</h4>
              <p>{product.material}</p>
            </div>
          )}

          <div className="quantity">
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
          </div>

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
        )}
      
    </div>
  );
};

export default ProductDetail;
