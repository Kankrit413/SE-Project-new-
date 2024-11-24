import React from "react";
import { useNavigate } from "react-router-dom";
import ProductSection from "./ProductSection";
import RecommendationSection from "./RecommendationSection";
import YouMightLike from "./YouMightLike";
import styles from "./stylespage2.css";

function Recommended() {
  const navigate = useNavigate();

  return (
    <div className={styles["recommended-page"]}>
      {/* Header Section */}
      <header className={styles["header"]}>
        <button className={styles["back-button"]} onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h1>Products Recommendation</h1>
        <div className={styles["header-spacer"]}></div>
      </header>

      {/* Main Content */}
      <main className={styles["main-content"]}>
        <section className={styles["product-section"]}>
          <ProductSection />
        </section>
        <section className={styles["recommendation-section"]}>
          <RecommendationSection />
        </section>
        <section className={styles["you-might-like-section"]}>
          <YouMightLike />
        </section>
      </main>
    </div>
  );
}

export default Recommended;
