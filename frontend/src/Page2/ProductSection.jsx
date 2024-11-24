import React from "react";
import styles from "./stylespage2.css"; // เปลี่ยนเป็น CSS Module

const ProductSection = ({ products }) => {
    return (
        <section className={styles["product-section"]}>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} className={styles["product-card"]}> {/* ใช้ product.id แทน index */}
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className={styles["price"]}>Price: ฿{product.price} ({product.quantity})</p>
                    <p><strong>Key Ingredients:</strong> {product.ingredients.join(", ")}</p>
                    <p>{product.description}</p>
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className={styles["buy-button"]}>
                        BUY IT NOW
                    </a>
                </div>
            ))}
        </section>
    );
};

export default ProductSection;
