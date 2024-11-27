import React from "react";
import "./stylespage2.css";
import "./buttonpage2.css";
import "./stylylesproduct.css";
import "./stylesyoumightlike.css";

const ProductSection = () => {
    return (<div>
        <section className="new-product-section">
            <div className="header-detail"> Products </div>

            {/* ประเภทของสินค้า */}
            <div className="new-product-type">
                cleanser
            </div>
            {/* ข้อมูลสินค้า */}
            <div className="new-product-card">
                {/* รูปสินค้า */}
                <div className="new-product-card img">
                <img src=" https://www.konvy.com/static/team/2024/0517/17159382005339_600x600.jpg" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct"> Gentle Foaming Cleanser 
                    </div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 579  ( 236 ml)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Glycerin, Aloe Vera Extract : <br/>
                        ช่วยปลอบประโลมผิวและลดการระคายเคือง เติมความชุ่มชื้นและลดการแห้งตึง
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = ' https://www.konvy.com/cetaphil/cetaphil-gentle-foaming-cleanser-236ml-48351.html?cstrackid=a6be98f1-cab2-4cf5-ae54-35e549e0f145'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;