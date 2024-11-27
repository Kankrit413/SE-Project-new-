import "../Home";
import React from "react";
import ProductSection from "./ProductSection";
import "./stylespage2.css";
import "./buttonpage2.css";
import RecommendationSection from "./RecommendationSection";
import YouMightLike from "./YouMightLike";

function Recommended() {
    return (
        <div>
            <header className="header-Recom">
                <button
                    className="new-back-button"
                    onClick={() => (window.location.href = "/")} // เปลี่ยนเส้นทางไปหน้า Home
                >
                    &larr;
                </button>
                <div className="Products-Recommendation">Products Recommendation</div>
            </header>
            <main className="new-main-content">
                <div className="product-container">
                    <ProductSection />
                    <RecommendationSection />
                </div>
                <YouMightLike />
            </main>
        </div>
    );
}

export default Recommended;
