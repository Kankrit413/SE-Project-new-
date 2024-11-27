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
          name: "Biore UV Aqua Rich Watery Essence",
          price: "฿357 (50 g)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-222865-swatch-zoom.jpg?version=1716886987", // เปลี่ยนเป็นรูปภาพตัวอย่าง
          ingredients: {
            "Royal Jelly Extract": "บำรุงผิวให้นุ่มชุ่มชื้น",
            "Hyaluronic Acid": "เติมความชุ่มชื้นให้ผิว",
          },
          buyLink:
            "https://www.watsons.co.th/th/%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94-biore-%E0%B8%9A%E0%B8%B5%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%A3-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-%E0%B8%AD%E0%B8%B0%E0%B8%84%E0%B8%A7%E0%B8%B2-%E0%B8%A3%E0%B8%B4%E0%B8%8A-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5-%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B9%8C-spf50-pa-50-%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%A1/p/BP_222865",
          CombinedResults:
            "เมื่อใช้คู่กัน ลดสิวและคงความชุ่มชื้นในผิว ตัวโฟมช่วยเตรียมผิวให้พร้อมสำหรับการทากันแดด",
        },
        {
          id: 2,
          name: "CANMAKE Mermaid Skin Gel UV",
          price: "฿275 (40 ml)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-260447-back-zoom.jpg?version=1716881411",
          ingredients: {
            "Aloe Vera Extract": "ลดการอักเสบและเพิ่มความชุ่มชื้น",
            "Collagen": "ช่วยให้ผิวดูอิ่มฟูและแข็งแรง",
          },
          buyLink: "https://www.watsons.co.th/th/%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%88%E0%B8%A5-canmake-%E0%B9%81%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%A1%E0%B8%84-%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A1%E0%B8%94-%E0%B8%AA%E0%B8%81%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%88%E0%B8%A5-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-spf50-pa-40%E0%B8%81.-01/p/BP_260447",
          CombinedResults:
            "เมื่อใช้คู่กัน ปรับสมดุลผิว ลดการอักเสบและเพิ่มความชุ่มชื้น",
        },
      ],
      cleanser: [
        {
          id: 3,
          name: "Moisturising Cream",
          price: "฿199 (50 g)",
          image: "https://down-th.img.susercontent.com/file/th-11134201-7rasb-m2mo91vszfyr30.webp",
          ingredients: {
            "Ceramides": "ฟื้นฟูเกราะป้องกันผิว",
            "Hyaluronic Acid": "กักเก็บความชุ่มชื้นในผิว",
          },
          buyLink: "https://shopee.co.th/%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%B5-CERAVE-Moisturising-Cream-%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%81%E0%B8%B2%E0%B8%A2-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B9%81%E0%B8%AB%E0%B9%89%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B8%81-50g.-i.121205602.1867293688?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=5c4ac331-3c22-4e63-931e-70e9057cabab&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1jah7897buh&xptdk=5c4ac331-3c22-4e63-931e-70e9057cabab",
          CombinedResults:
            "เมื่อใช้คู่กัน ช่วยทำความสะอาดผิวโดยไม่ทำให้ผิวแห้งตึง พร้อมเพิ่มความชุ่มชื้น",
        },
        {
          id: 4,
          name: "Effaclar DUO+M",
          price: "฿210",
          image: "https://down-th.img.susercontent.com/file/th-11134201-7r990-lwlqo8dzbgqrc2.webp",
          ingredients: {
            "Niacinamide": "ลดการอักเสบของสิวและรอยแดง",
            "Procerad": "ลดรอยดำและรอยแดงหลังการเกิดสิว",
            "Zinc PCA": "ควบคุมความมันส่วนเกิน",
          },
          buyLink: "https://shopee.co.th/%E0%B8%A5%E0%B8%B2-%E0%B9%82%E0%B8%A3%E0%B8%8A-%E0%B9%82%E0%B8%9E%E0%B9%80%E0%B8%8B%E0%B8%A2%E0%B9%8C-La-Roche-Posay-Effaclar-DUO-M-%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%8B%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%A7-7.5ml-i.56542501.19585411106?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=4cc54796-f949-43bf-a814-6471d41872ff&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1j7y81j71fm&xptdk=4cc54796-f949-43bf-a814-6471d41872ff",
          CombinedResults:
            "เมื่อใช้คู่กัน Niacinamide ในทั้งสองผลิตภัณฑ์ช่วยลดการอักเสบ รอยแดง และเสริมเกราะป้องกันผิว Zinc PCA และ Zinc Oxide ",
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