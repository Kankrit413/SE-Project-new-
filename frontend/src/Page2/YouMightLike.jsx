import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./stylespage2.css";

const YouMightLike = () => {
  const products = [
    { id: 1, name: "Mizumi Water", price: "฿399", image: "/images/mizumi.jpg" },
    { id: 2, name: "Anessa Sunscreen", price: "฿711", image: "/images/anessa.jpg" },
    { id: 3, name: "HER HYNESS", price: "฿750", image: "/images/herhyness.jpg" },
    { id: 4, name: "Biore UV", price: "฿357", image: "/images/biore.jpg" },
    { id: 5, name: "CeraVe Cleanser", price: "฿245", image: "/images/cerave.jpg" },
    { id: 6, name: "La Roche-Posay", price: "฿496", image: "/images/laroche.jpg" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleProductClick = (productId) => {
    console.log("Clicked product with ID:", productId);
    // Add navigation or detailed view logic here
  };

  return (
    <section className={styles["you-might-like"]}>
      <h2>You Might Like</h2>
      <Slider {...sliderSettings}>
        {products.map((product) => (
          <div key={product.id} className={styles["product-card"]} onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className={styles["price"]}>{product.price}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default YouMightLike;
