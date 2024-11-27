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
                Moisturizer
            </div>
            {/* ข้อมูลสินค้า */}
            <div className="new-product-card">
                {/* รูปสินค้า */}
                <div className="new-product-card img">
                <img src=" https://medias.watsons.co.th/publishing/WTCTH-308296-front-zoom.jpg " alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct"> Bija trouble facial foam
                    </div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 400   (150 ml)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Jeju Bija Seed Oil, Salicylic Acid : <br/>
                        ช่วยผลัดเซลล์ผิวลดการอักเสบและลดสิว
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = '  https://th.innisfree.com/products/innisfree-bija-trouble-facial-foam-150-ml '}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;