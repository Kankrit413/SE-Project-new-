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
                <img src="  https://down-th.img.susercontent.com/file/th-11134201-7rasb-m2mo91vszfyr30.webp" alt="Clear Nose UV Sun Serum"/>
                </div>
                <div className="new-products-text-box">
                    {/* ชื่อสินค้า */}
                    <div className="name-prodeuct"> Moisturising Cream 
                    </div>
                    {/* ราคา */}
                    <div className="price"> Price: ฿ 199  (50 g)</div> 
                    {/* ส่วนผสม */}
                    <div className="Ingredients"><strong> Key Ingredients: </strong>
                    <div>
                        Ceramides, Hyaluronic Acid : <br/>
                        ฟื้นฟูเกราะป้องกันผิว กักเก็บความชุ่มชื้นในผิว
                    </div>
                    </div>
                </div>
                <button className="new-buy-button" onClick={() => window.location.href = ' https://shopee.co.th/%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%B5-CERAVE-Moisturising-Cream-%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%81%E0%B8%B2%E0%B8%A2-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B9%81%E0%B8%AB%E0%B9%89%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B8%81-50g.-i.121205602.1867293688?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=5c4ac331-3c22-4e63-931e-70e9057cabab&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1jah7897buh&xptdk=5c4ac331-3c22-4e63-931e-70e9057cabab'}>
                    BUY IT NOW
                </button>
            </div>
        </section>
    </div> 
    );
};

export default ProductSection;