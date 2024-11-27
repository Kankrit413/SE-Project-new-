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
                <img src=" http://surl.li/xrtupx" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct"> Calendula Deep Cleansing Foaming Face Wash 
                    </div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 890  (75 ml)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Jeju Bija Seed Oil, Salicylic Acid : <br/>
                        ลดการอักเสบและปลอบประโลมผิว ช่วยผลัดเซลล์ผิวและลดสิว
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = ' https://www.kiehls.co.th/th_TH/skincare/face-cleansers-scrubs/calendula-deep-cleansing-foaming-face-wash/512.html?dwvar_512_size=75%20ML'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;