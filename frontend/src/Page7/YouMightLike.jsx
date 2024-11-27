import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-slick";
import "./stylespage2.css"; // สมมุติว่า stylespage2 คือไฟล์ CSS หลัก
import "./buttonpage2.css"; // สำหรับสไตล์ปุ่ม (ถ้ามี)
import "./stylylesproduct.css";
import  "./stylesyoumightlike.css";

const YouMightLike = () => {
  const products = [
    {
      id: 1,
      band: "MizuMi",
      name: "Cica Soothing Moisture Gel",
      price: "฿399",
      image: "https://down-th.img.susercontent.com/file/th-11134207-7r98w-llpqt9tjeznr1d.webp",
      link: "https://shopee.co.th/..."
    },
    {
      id: 2,
      band: "Anessa",
      name: "Anessa Perfect UV Sunscreen Skincare Milk",
      price: "฿729",
      image: " https://medias.watsons.co.th/publishing/WTCTH-309592-front-zoom.jpg?version=1729019423 ",
      link: "https://shorturl.asia/rxWki"
    },
    {
      id: 3,
      band: "HER HYNESS",
      name: "HER HYNESS Product",
      price: "฿750",
      image: "https://medias.watsons.co.th/publishing/WTCTH-305799-front-prodcat.jpg?version=1713547008",
      link: "https://www.watsons.co.th/th/%E0%B9%80%E0%B8%AE%E0%B8%AD-%E0%B9%84%E0%B8%AE%E0%B9%80%E0%B8%99%E0%B8%AA-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94-%E0%B8%A3%E0%B8%AD%E0%B8%A2%E0%B8%B1%E0%B8%A5-%E0%B9%84%E0%B8%AE%E0%B8%A2%E0%B8%B2-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%8B%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99-spf-50-pa-30%E0%B8%A1%E0%B8%A5.-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94%E0%B9%84%E0%B8%AE%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%84%E0%B8%A5%E0%B8%B5/p/BP_305799"
    },
    {
      id: 4,
      band: "Biore",
      name: "Biore UV",
      price: "฿357",
      image: "https://medias.watsons.co.th/publishing/WTCTH-263843-front-prodcat.jpg?version=1716795950",
      link: "https://www.watsons.co.th/th/%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%94-biore-%E0%B8%9A%E0%B8%B5%E0%B9%82%E0%B8%AD%E0%B9%80%E0%B8%A3-%E0%B8%A2%E0%B8%B9%E0%B8%A7%E0%B8%B5-%E0%B8%AD%E0%B8%B0%E0%B8%84%E0%B8%A7%E0%B8%B2-%E0%B8%A3%E0%B8%B4%E0%B8%8A-%E0%B8%A7%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5-%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B9%8C-spf50-pa-50-%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%A1/p/BP_222865"
    },
    {
      id: 5,
      band: "CeraVe",
      name: "CeraVe Cleanser",
      price: "฿245",
      image: "https://medias.watsons.co.th/publishing/WTCTH-275377-front-zoom.jpg?version=1716794265",
      link: "https://www.watsons.co.th/th/%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%8B%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C-cerave-moisturizing-cream-%E0%B9%80%E0%B8%8B%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%B5%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%8B%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%A3%E0%B8%8B%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%A1-50-g./p/BP_275377"
    },
    {
      id: 6,
      band: "La Roche-Posay",
      name: "La Roche-Posay",
      price: "฿496",
      image: "https://down-th.img.susercontent.com/file/th-11134201-7r990-lwlqo8dzbgqrc2.webp ",
      link: "https://shopee.co.th/%E0%B8%A5%E0%B8%B2-%E0%B9%82%E0%B8%A3%E0%B8%8A-%E0%B9%82%E0%B8%9E%E0%B9%80%E0%B8%8B%E0%B8%A2%E0%B9%8C-La-Roche-Posay-Effaclar-DUO-M-%E0%B8%A1%E0%B8%AD%E0%B8%A2%E0%B8%8B%E0%B9%8C%E0%B9%80%E0%B8%88%E0%B8%AD%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%A7-7.5ml-i.56542501.19585411106?referer=aHR0cHM6Ly90aC5teS1iZXN0LmNvbS8%3D&sp_atk=4cc54796-f949-43bf-a814-6471d41872ff&user_agent=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEzMC4wLjAuMCBTYWZhcmkvNTM3LjM2&utm_campaign=-&utm_content=thmybest_presses_50106&utm_medium=affiliates&utm_source=an_15297270000&utm_term=c1j7y81j71fm&xptdk=4cc54796-f949-43bf-a814-6471d41872ff"
    },
    {
      id: 7,
      band: "Cetaphil",
      name: "Cetaphil",
      price: "฿349",
      image: "https://www.konvy.com/static/team/2024/0517/17159382005339_600x600.jpg",
      link: "https://www.konvy.com/cetaphil/cetaphil-gentle-foaming-cleanser-236ml-48351.html?cstrackid=a6be98f1-cab2-4cf5-ae54-35e549e0f145"
    }
  ];

  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    } else {
      alert("This product does not have a link.");
    }
  };


  return (
    <section className="new-you-might-like">
        <h2>You Might Like</h2>
            <div className="new-product-slider">
                {products.map((product) => (
      
                <div key={product.id} className="new-YouMightLike-card" onClick={() => handleClick(product.link)}>

                    <img src={product.image} alt={product.name} />

                        <div className="new-YouMightLike-detail-price">
                            <div className="new-YouMightLike-card-details">
                                {product.band}<br/> 
                                {product.name}
                            </div>
                            <div className="new-YouMightLike-price">
                                {product.price}
                            </div>
                        </div>
                </div>
                  ))}
              </div>
    </section>
  );
};




export default YouMightLike;
