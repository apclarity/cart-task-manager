import { useAppSelector, useAppDispatch } from "../app/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import styles from '../styles/products.module.scss'

const Products = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className={styles["product-grid"]}>Loading, please wait</p>;
  if (error) return <p className={styles["product-grid"]}>Error loading products:{error}</p>;
  if (items.length === 0) return <p className={styles["product-grid"]}>No products available</p>;

  return (
    <div className={styles["product-grid"]}>
      {items.map(product => (
        <Link key={product.id} to={`/products/${product.id}`} className={styles.link}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
