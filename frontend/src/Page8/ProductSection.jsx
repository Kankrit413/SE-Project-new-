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
                Sunscreen
            </div>
            {/* ข้อมูลสินค้า */}
            <div className="new-product-card">
                {/* รูปสินค้า */}
                <div className="new-product-card img">
                <img src="  https://medias.watsons.co.th/publishing/WTCTH-309592-front-zoom.jpg?version=1729019423" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct">Sunscreen Skincare Milk</div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 729 (60 ml)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Zinc Oxide and Titanium Dioxide : <br/>
                        ช่วยปกป้องผิวจากรังสี UVA และ UVB ได้ดี เหมาะสำหรับผิวแพ้ง่าย
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = 'https://shorturl.asia/rxWki'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;