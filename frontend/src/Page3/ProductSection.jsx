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
                <img src=" https://medias.watsons.co.th/publishing/WTCTH-255440-front-zoom.jpg" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct"> Garnier Super UV Serum Sunscreen 
                    </div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 319  (30 g)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Vitamin C, Hyaluronic Acid : <br/>
                        ช่วยให้ผิวกระจ่างใส ลดจุดด่างดำ ให้ความชุ่มชื้น คงความเนียนนุ่มให้ผิว
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = 'https://www.watsons.co.th/th/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%A2%E0%B9%88-%E0%B9%84%E0%B8%9A%E0%B8%A3%E0%B8%97%E0%B9%8C-%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%A5%E0%B8%B5%E0%B8%97-%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%99-%E0%B8%8B%E0%B8%B5-%E0%B8%8B%E0%B8%B9%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-%E0%B8%8B%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99-%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B8%9F50-%E0%B8%9E%E0%B8%B5%E0%B9%80%E0%B8%AD-%E0%B9%80%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B8%B1/p/BP_255440'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;