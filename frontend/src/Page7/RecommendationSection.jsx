import React, { useState } from "react";
import "./stylespage2.css";
import "./buttonpage2.css";
import "./stylylesproduct.css";
import "./stylesyoumightlike.css";

const RecommendationSection = () => {
    const [category, setCategory] = useState(""); // ประเภทสินค้า
    const [currentIndex, setCurrentIndex] = useState(0); // สินค้าแนะนำที่แสดงอยู่
  
    // สินค้าแนะนำแบ่งตามประเภท
    const recommendations = {
      sunscreen: [
        {
          id: 1,
          name: "Garnier Super UV Serum Sunscreen",
          price: "฿319 (30 ml)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-255440-front-zoom.jpg", // เปลี่ยนเป็นรูปภาพตัวอย่าง
          ingredients: {
            "Vitamin C": "ช่วยลดรอยดำและปรับสีผิวให้กระจ่างใส",
            "Hyaluronic Acid": "เติมความชุ่มชื้นให้ผิว",
          },
          buyLink:
            "https://www.watsons.co.th/th/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A2%E0%B9%88-%E0%B9%84%E0%B8%9A%E0%B8%A3%E0%B8%97%E0%B9%8C-%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%A5%E0%B8%B5%E0%B8%97-%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B8%8B%E0%B8%B5-%E0%B8%8B%E0%B8%B9%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-%E0%B8%8B%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99-%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B8%9F50-%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD-%E0%B9%80%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B8%B1/p/BP_255440",
          CombinedResults:
            "ผิวจะดูสดใส แข็งแรง ชุ่มชื้น และป้องกันแสงแดดได้ดี",
        },
        {
          id: 2,
          name: "Anessa Perfect UV Sunscreen Skincare Milk",
          price: "฿729 (60 ml)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-309592-front-zoom.jpg?version=1729019423 ",
          ingredients: {
            "Super Hyaluronic Acid": " เติมความชุ่มชื้นให้ผิว",
            "Collagen": "ช่วยให้ผิวดูอิ่มฟูและแข็งแรง",
          },
          buyLink: "https://www.watsons.co.th/th/%E0%B8%AD%E0%B9%80%E0%B8%99%E0%B8%AA%E0%B8%8B%E0%B9%88%E0%B8%B2-%E0%B9%80%E0%B8%9E%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%84-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-%E0%B8%8B%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99-%E0%B8%AA%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B9%8C-%E0%B8%A1%E0%B8%B4%E0%B8%A5%E0%B8%84%E0%B9%8C-%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%AD-%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B8%9F-50-%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD-60-%E0%B8%A1%E0%B8%A5./p/BP_309592",
          CombinedResults:
            "ผิวแข็งแรง ปราศจากสิว ลดการระคายเคือง และปกป้อง UV อย่างมีประสิทธิภาพ",
        },
      ],
      cleanser: [
        {
          id: 3,
          name: "Deep Clean Foaming Cleanser",
          price: "฿239 (150 g)",
          image: "http://surl.li/xrtupx", // เปลี่ยนเป็นรูปภาพตัวอย่าง
          ingredients: {
            "Salicylic Acid": "ลดสิวและผลัดเซลล์ผิว",
            "Tea Tree Oil": "ลดการอักเสบและแบคทีเรีย",
          },
          buyLink:
            "https://www.konvy.com/clear-nose/clear-nose-acne-care-solution-cleanser-150ml-82873.html?srsltid=AfmBOorwEG_Jod62mqaWYeEbhWehM1ysdpeQXU8xv0JCmwfikxUdAeVB",
          CombinedResults:
            "ผิวสะอาด ลดสิว พร้อมฟื้นฟูเกราะป้องกันผิวให้ชุ่มชื้นและแข็งแรง",
        },
        {
          id: 4,
          name: "Acne Care Solution Cleanser",
          price: "฿259 (150 ml)",
          image: "https://clearnose.co.th/wp-content/uploads/2017/12/CNW_v1.png",
          ingredients: {
            "Salicylic Acid": "ช่วยทำความสะอาดรูขุมขน ลดการสะสมสิ่งสกปรก",
            "Green Tea Extract": "ช่วยลดการอักเสบและมีสารต้านอนุมูลอิสระ",
          },
          buyLink: "https://example.com/acne-care-cleanser",
          CombinedResults:
            "ผิวสะอาด ชุ่มชื้น ลดสิว และมีเกราะป้องกันที่แข็งแรง",
        },
      ],
    };

    // สินค้าปัจจุบันตามประเภทที่เลือก
    const currentRecommendations = recommendations[category] || [];

    // สำหรับเลื่อนสินค้า
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
    <section className="new-recommendation-section">
        <div className="header-detail">Recommended Products</div>

        {/* ปุ่มเลือกประเภทสินค้า */}
        <div className="category-buttons">
            <button className='button-type-new' onClick={() => setCategory("sunscreen")}>Sunscreen</button>
            <button className='button-type-new' onClick={() => setCategory("cleanser")}>Cleanser</button>
        </div>

        {/* แสดงสินค้าแนะนำ */}
        {category ? ( currentRecommendations.length > 0 ? ( 
            <div className="new-recommendation-card">
                {/* รูปภาพ */}
                <div className="new-recommendation-card">
                <img
                src={currentRecommendations[currentIndex].image}
                alt={currentRecommendations[currentIndex].name}
                />
                </div>
                <div className="new-Recommended-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct">{currentRecommendations[currentIndex].name}</div>
                    
                    {/* Price */}
                    <div>
                        <div className="price">
                            Price :{" "}{currentRecommendations[currentIndex].price}
                        </div>
                    </div>
                
                    {/* Ingredients */}
                    <div className="Ingredients">
                        <strong> 
                            Key Ingredients: 
                        </strong>
                        <div className="ingredients">
                            {currentRecommendations[currentIndex].ingredients && Object.entries(currentRecommendations[currentIndex].ingredients).map(([key, value], index) => (
                                <div key={index}>
                                <strong>{key}:</strong> {value}
                                </div>
                            ))}
                        </div>                      
                    </div>
                </div>
                {/* Combined Results */}
                <div className="new-combined ">
                    <div className="Ingredients">
                    {currentRecommendations[currentIndex].CombinedResults && (
                        <div>
                            Combined Results:{" "}
                            {currentRecommendations[currentIndex].CombinedResults}
                        </div> )}
                    </div>
                </div>      

                {/* ปุ่ม */}
                <div className="navigation-buttons">
                    {/* ปุ่ม back */}
                    <button onClick={handleBack} disabled={currentIndex === 0}>
                            Back
                    </button>

                    {/* ปุ่ม buy it now */}
                    <button onClick={() => window.location.href = currentRecommendations[currentIndex].buyLink}>
                            BUY IT NOW
                    </button>
                        
                    {/* ปุ่ม next */}
                    <button onClick={handleNext} disabled={currentIndex === currentRecommendations.length - 1}>
                            Next
                    </button>
                </div>

            </div>
        ) : (
            <p>No products available for this category.</p>
            )
        ) : (
            <p>Please select a category to view recommendations.</p>
            )}
    </section>
  );
};

export default RecommendationSection;