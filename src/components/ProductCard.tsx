import { Product } from "../features/products/productSlice";
import styles from "../styles/product-card.module.scss";

const ProductCard = ({ product }: { product: Product }) => (
  <div className={styles["product-card"]}>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.material}</p>
    <p className="price">Rp{product.price.toLocaleString("id-ID")}</p>
  </div>
);

export default ProductCard;
