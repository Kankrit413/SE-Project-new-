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
      cleanser: [
        {
          id: 1,
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
          id: 2,
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
      moisturizer: [
        {
          id: 3,
          name: "UltraSensitive Aquaporin Nourishing Gel Cream",
          price: "฿765",
          image: "https://down-th.img.susercontent.com/file/th-11134207-7qul0-lj19fdipjxch9b.webp",
          ingredients: {
            "Glucosyl Glycerol": "กระตุ้นระบบนำส่งความชุ่มชื้นของผิว",
            "Aqua Porin": "ช่วยเพิ่มการส่งผ่านน้ำในผิว",
          },
          buyLink: "https://shopee.co.th/Eucerin-UltraSENSITIVE-AQUAPORIN-NOURISHING-GEL-CREAM-50-ML-%E0%B8%A2%E0%B8%B9%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B8%B4%E0%B8%99-%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99-%E0%B8%82%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3-i.378293230.7979765646?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=998026ef-cbb4-48a7-aaa5-dc27fe96ecd5&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1j9ampe6q6w&xptdk=998026ef-cbb4-48a7-aaa5-dc27fe96ecd5",
          CombinedResults:
            "เมื่อใช้คู่กัน เติมความชุ่มชื้นให้ผิวได้ล้ำลึก ช่วยลดความแห้งกร้านและเสริมให้กันแดดปกป้องผิวจากการสูญเสียน้ำได้ดียิ่งขึ้น",
        },
        {
          id: 4,
          name: "Cica Soothing Moisture Gel",
          price: "฿379",
          image: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-llpqt9tjeznr1d.webp",
          ingredients: {
            "Centella Asiatica Extract": "ลดการอักเสบและปลอบประโลมผิว",
            "Sodium Hyaluronate": "เติมเต็มความชุ่มชื้นให้ผิว",
          },
          buyLink: "https://example.com/sunscreen-b",
          CombinedResults:
            "เมื่อใช้คู่กัน เหมาะสำหรับผิวแพ้ง่าย ช่วยลดการอักเสบและปลอบประโลมผิวจากแสงแดด ",
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
            <button className='button-type-new' onClick={() => setCategory("cleanser")}>Cleanser</button>
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