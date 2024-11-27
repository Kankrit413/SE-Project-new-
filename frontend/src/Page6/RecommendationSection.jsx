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
            "เมื่อใช้คู่กัน ช่วยลดการอักเสบและสิวพร้อมปกป้องผิวจากรังสี UV โดยไม่ทำให้เกิดการอุดตัน และช่วยให้ผิวชุ่มชื้นระหว่างวัน",
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
            "เมื่อใช้คู่กัน ช่วยลดสิวและการอักเสบในขณะที่ปกป้องผิวจากแสงแดด ตัวโฟมจะช่วยปรับสมดุลความมัน ",
        },
      ],
      cleanser: [
        {
          id: 3,
          name: "Calendula Deep Cleansing Foaming Face Wash",
          price: "฿890 (75 ml)",
          image: "http://surl.li/xrtupx", // เปลี่ยนเป็นรูปภาพตัวอย่าง
          ingredients: {
            "Calendula Flower Extract": "ช่วยปลอบประโลมผิวและลดการระคายเคือง",
            "Glycerin": "ช่วยคงความชุ่มชื้นของผิวและทำให้ผิวเนียนนุ่ม",
          },
          buyLink:
            "https://www.kiehls.co.th/th_TH/skincare/face-cleansers-scrubs/calendula-deep-cleansing-foaming-face-wash/512.html?dwvar_512_size=75%20ML",
          CombinedResults:
            "เมื่อใช้คู่กัน ผิวจะเนียนนุ่ม ชุ่มชื้น กระจ่างใสขึ้น ลดโอกาสของการระคายเคืองจากแสงแดดและปัจจัยภายนอก",
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
            "เมื่อใช้คู่กัน ลดการเกิดสิวและช่วยทำให้ผิวมีความชุ่มชื้น ผิวจะดูเรียบเนียนพร้อมรับการปกป้องจากแสงแดดอย่างเต็มที่",
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