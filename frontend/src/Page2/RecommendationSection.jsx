import React, { useState } from "react";
import styles from "./stylespage2.css";
import { Link } from "react-router-dom";

const RecommendationSection = () => {
    const [category, setCategory] = useState(""); // ประเภทสินค้า
    const [currentIndex, setCurrentIndex] = useState(0); // สินค้าแนะนำที่แสดงอยู่

    const recommendations = {
        cleanser: [
            {
                id: 1,
                name: "Acne Care Solution Cleanser",
                price: "฿259 (150 ml)", 
                image: "https://clearnose.co.th/wp-content/uploads/2017/12/CNW_v1.png",
                ingredients: {
                    "Salicylic Acid": "ช่วยทำความสะอาดรูขุมขน ลดการสะสมของสิ่งสกปรกที่ทำให้เกิดสิว",
                    "Green Tea Extract": "ช่วยลดการอักเสบและต้านอนุมูลอิสระ",
                },
                buyLink: "https://www.konvy.com",
                CombinedResults: "ช่วยให้ผิวแข็งแรง ลดความเสี่ยงต่อการระคายเคือง",
            },
        ],
        sunscreen: [
            { id: 2, name: "Sunscreen A", price: "฿299", image: "sunscreen-a.jpg" },
        ],
    };

    const currentRecommendations = recommendations[category] || [];

    const handleNext = () => {
        if (currentIndex < currentRecommendations.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className={styles["recommendation-section"]}>
            <h2>Recommended Products</h2>
            <div className={styles["category-buttons"]}>
                <button onClick={() => setCategory("cleanser")}>Cleanser</button>
                <button onClick={() => setCategory("sunscreen")}>Sunscreen</button>
            </div>
            {category ? (
                currentRecommendations.length > 0 ? (
                    <ProductCard
                        product={currentRecommendations[currentIndex]}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        currentIndex={currentIndex}
                        totalProducts={currentRecommendations.length}
                    />
                ) : (
                    <p>No products available for this category.</p>
                )
            ) : (
                <p>Please select a category to view recommendations.</p>
            )}
        </section>
    );
};

const ProductCard = ({ product, handleBack, handleNext, currentIndex, totalProducts }) => (
    <div className={styles["recommendation-card"]}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className={styles["price"]}>Price: {product.price}</p>
        {product.ingredients && (
            <div className={styles["ingredients"]}>
                {Object.entries(product.ingredients).map(([key, value]) => (
                    <p key={key}>
                        <strong>{key}:</strong> {value}
                    </p>
                ))}
            </div>
        )}
        {product.CombinedResults && <p>{product.CombinedResults}</p>}
        <div className={styles["navigation-buttons"]}>
            <button onClick={handleBack} disabled={currentIndex === 0}>
                Back
            </button>
            <Link to={product.buyLink} target="_blank" className={styles["buy-button"]}>
                BUY IT NOW
            </Link>
            <button onClick={handleNext} disabled={currentIndex === totalProducts - 1}>
                Next
            </button>
        </div>
    </div>
);

export default RecommendationSection;
