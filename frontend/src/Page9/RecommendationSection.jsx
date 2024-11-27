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
          name: "Clear Nose UV Sun Serum",
          price: "฿589 (80 ml)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-298224-swatch-zoom.jpg?version=1716887832", // เปลี่ยนเป็นรูปภาพตัวอย่าง
          ingredients: {
            "Niacinamide": "ลดการอักเสบและควบคุมความมัน",
            "Zinc Oxide": "ช่วยป้องกันรังสี UV และลดการอักเสบ",
          },
          buyLink:
            "https://www.google.com/url?q=https://www.watsons.co.th/th/%25E0%25B8%2584%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%25A1%25E0%25B8%2581%25E0%25B8%25B1%25E0%25B8%2599%25E0%25B9%2581%25E0%25B8%2594%25E0%25B8%2594-clear-nose-%25E0%25B9%2580%25E0%25B8%2584%25E0%25B8%25A5%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%25A3%25E0%25B9%258C-%25E0%25B9%2582%25E0%25B8%2599%25E0%25B8%25AA-%25E0%25B8%25A2%25E0%25B8%25B9%25E0%25B8%25A7%25E0%25B8%25B5-%25E0%25B8%258B%25E0%25B8%25B1%25E0%25B8%2599-%25E0%25B9%2580%25E0%25B8%258B%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B9%2588%25E0%25B8%25A1-%25E0%25B9%2580%25E0%25B8%25AD%25E0%25B8%25AA%25E0%25B8%259E%25E0%25B8%25B5%25E0%25B9%2580%25E0%25B8%25AD%25E0%25B8%259F50-%25E0%25B8%259E%25E0%25B8%25B5%25E0%25B9%2580%25E0%25B8%25AD-80-%25E0%25B8%25A1%25E0%25B8%25A5./p/BP_298224&sa=D&source=docs&ust=1732646105290465&usg=AOvVaw23Lbb1dFeLD63tItvfLbfP",
          CombinedResults:
            "เมื่อใช้คู่กัน โฟมล้างหน้าช่วยลดการระคายเคืองและคงความชุ่มชื้นให้ผิว ",
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
            "เมื่อใช้คู่กัน เหมาะสำหรับผู้ที่อยู่กลางแจ้ง โฟมล้างหน้าช่วยลดการสะสมของความมัน ",
        },
      ],
      moisturizer: [
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
          name: "Intensive Moisture Care Intensive Moisture Cream",
          price: "฿815  (40 g)",
          image: "https://medias.watsons.co.th/publishing/WTCTH-265683-front-zoom.jpg?version=1716797372",
          ingredients: {
            "Ceramide Functioning Ingredients": "ฟื้นฟูเกราะป้องกันผิว",
            "Eucalyptus Extract": "ช่วยให้ความชุ่มชื้นซึมลึกสู่ผิว",
          },
          buyLink: "https://shopee.co.th/Curel-INTENSIVE-MOISTURE-CARE-Intensive-Moisture-Cream-40g-%E0%B8%84%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%A3%E0%B8%A5-%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%99%E0%B8%8B%E0%B8%B5%E0%B8%9F-%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B9%81%E0%B8%84%E0%B8%A3%E0%B9%8C-%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1-40-%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%A1-i.66638122.1103900485?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=80c5d0bc-3b88-40e6-aa20-23e1f3cdc413&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1j92wi5hsdy&xptdk=80c5d0bc-3b88-40e6-aa20-23e1f3cdc413",
          CombinedResults:
            "เมื่อใช้คู่กัน ช่วยลดอาการผิวแห้งลอกหรือบอบบาง พร้อมเสริมเกราะป้องกันผิว เหมาะสำหรับผิวแห้งหรือผิวแพ้ง่าย ",
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