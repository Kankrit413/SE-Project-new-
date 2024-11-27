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
      moisturizer: [
        {
          id: 3,
          name: "5X Ceramide Barrier Moisturizer Gel",
          price: "฿369 (30 g)",
          image: "https://s2.konvy.com/static/team/2024/0412/17128916292937.jpg",
          ingredients: {
            "5X Ceramide Complex": "ซ่อมแซมเกราะป้องกันผิว",
            "Centella Asiatica": "ลดการอักเสบและปลอบประโลมผิว",
          },
          buyLink: "https://shopee.co.th/SKINTIFIC-5X-%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B2%E0%B9%84%E0%B8%A1%E0%B8%94%E0%B9%8C-%E0%B8%9A%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B9%8C-%E0%B8%81%E0%B8%B9%E0%B9%89%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%80%E0%B8%88%E0%B8%A5-%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C-30g-80g-5X-Ceramide-Barrier-Moisturizer-Gel-i.778788586.20804722996?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=32b1d4d5-30b9-43b8-8673-712066c96c18&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1j8ffow7qyh&xptdk=32b1d4d5-30b9-43b8-8673-712066c96c18",
          CombinedResults:
            "เมื่อใช้คู่กัน ช่วยฟื้นฟูเกราะป้องกันผิว ลดการระคายเคือง เหมาะสำหรับผิวที่บอบบางและแห้ง",
        },
        {
          id: 4,
          name: "Cica Soothing Moisture Gel",
          price: "฿379 (45 ml)",
          image: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-llpqt9tjeznr1d.webp",
          ingredients: {
            "Centella Asiatica Extract": "ลดการอักเสบและปลอบประโลมผิว",
            "Sodium Hyaluronate": "เติมเต็มความชุ่มชื้นให้ผิว",
          },
          buyLink: "https://example.com/sunscreen-b",
          CombinedResults:
            "เมื่อใช้คู่กัน ช่วยลดการอักเสบและเพิ่มความชุ่มชื้นให้ผิว เหมาะสำหรับผิวแพ้ง่ายที่ต้องการการบำรุงอย่างล้ำลึก ",
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
            <button className='button-type-new' onClick={() => setCategory("moisturizer")}>Moisturizer</button>
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