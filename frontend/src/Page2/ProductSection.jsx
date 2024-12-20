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
                <img src=" https://medias.watsons.co.th/publishing/WTCTH-298224-swatch-zoom.jpg?version=1716887832" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct">Clear Nose UV Sun Serum</div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿589 (40 ml)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Zinc Oxide, Titanium Dioxide : <br/>
                        ทำหน้าที่ปกป้องผิวจากรังสี UVA และ UVB โดยเฉพาะสำหรับผิวที่มีปัญหาสิว
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = 'https://shorturl.asia/W6ynO'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;