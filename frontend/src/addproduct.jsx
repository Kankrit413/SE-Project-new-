import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddProductForm.css";   
import Home from "./Home";
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    brand: "",
    startDate: "",
    endDate: "",
    reviewLink: "" // เก็บแค่ลิงค์เดียว
  });
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentRelatedProduct, setCurrentRelatedProduct] = useState("");
  const [image, setImage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddIngredient = () => {
    if (currentIngredient.trim()) {
      if (ingredients.includes(currentIngredient.trim())) {
        setError("This ingredient is already added.");
      } else {
        setIngredients([...ingredients, currentIngredient.trim()]);
        setCurrentIngredient("");
        setError("");
      }
    }
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  const handleAddRelatedProduct = () => {
    if (currentRelatedProduct.trim()) {
      if (relatedProducts.includes(currentRelatedProduct.trim())) {
        setError("This related product is already added.");
      } else {
        setRelatedProducts([...relatedProducts, currentRelatedProduct.trim()]);
        setCurrentRelatedProduct("");
        setError("");
      }
    }
  };

  const handleRemoveRelatedProduct = (index) => {
    const updatedRelatedProducts = relatedProducts.filter((_, i) => i !== index);
    setRelatedProducts(updatedRelatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedPrice) {
      setError("Please select a price option.");
      return;
    }
  
    // ตรวจสอบว่ามีการเพิ่ม review link หรือไม่
    if (!formData.reviewLink.trim()) {
      setError("Please add a review link");
      return;
    }
  
    // ตรวจสอบว่า reviewLink เป็น URL หรือไม่
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlPattern.test(formData.reviewLink.trim())) {
      setError("Please enter a valid URL.");
      return;
    }
  
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== 'reviewLink' && formData[key]) {
        data.append(key, formData[key]);
      }
    });
  
    // ส่ง reviewLinks เป็น array
    data.append("reviewLinks", JSON.stringify([formData.reviewLink])); // ส่ง reviewLink ในรูปแบบ array
  
    data.append("ingredients", JSON.stringify(ingredients));
    data.append("relatedProducts", JSON.stringify(relatedProducts));
    data.append("productImage", image);
    data.append("selectedPrice", selectedPrice);
  
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      data.append("addedBy", loggedInUser);
    } else {
      alert("Please log in to add a product.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/add-product", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 201) {
        alert("Product added successfully!");
        navigate("/payment", { state: { price: selectedPrice === "weekly" ? 1000 : 3000 } });
      }
    } catch (error) {
      setError("Error adding product. Please try again.");
      console.error("Error adding product:", error);
    }
  };
  
  return (
    <header className="header">
    <div className="add-product-form-container">
      
        <div className="add-product-title"><h1>Add Product</h1>  </div>
        <button className="close-btn" onClick={() => navigate(-1)}>&times;</button>

        <form onSubmit={handleSubmit} className="add-product-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
              <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
              />
          </div>

          <div className="form-group">
              <textarea
                  name="description"
                  placeholder="Product Details"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="textarea-field"
              ></textarea>
          </div>

          <div className="form-group">
               <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  className="typefrom"
              >
                  <option value="">
                      Select Type
                  </option>
                  <option value="sunscreen">Sunscreen</option>
                  <option value="cleanser">Cleanser</option>
                  <option value="moisturizer">Moisturizer</option>
               </select>
               <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  className="input-field"
              />
              <input
                  type="text"
                  name="price"
                  placeholder="Price (e.g., ฿100)"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="input-field"
              />
          </div>

          {/* ส่วนของ Ingredients */}
          <div className="ingredients-field">
            <input
              type="text"
              placeholder="Add an ingredient"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              className="input-field"
            />
            <button type="button" onClick={handleAddIngredient} className="ingredients-btn">
              Add Ingredient
            </button>
          </div>

          <div className="ingredient-container">
            <ul className="ingredient-list">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="remove-btn"
                  >
                    Remove
                  </button> {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* ส่วนของ Related Products */}
          <div className="related-products-field">
            <input
              type="text"
              placeholder="Add a related product"
              value={currentRelatedProduct}
              onChange={(e) => setCurrentRelatedProduct(e.target.value)}
              className="input-field"
            />

          
            <button
              type="button"
              onClick={handleAddRelatedProduct}
              className="related-products-btn"
            >
              Add Related Product
            </button>
            </div>
            <div className="ingredient-container">
            <ul className="related-products-list">
              {relatedProducts.map((product, index) => (
                <li key={index} className="related-product-item">
                  
                  <button
                    type="button"
                    onClick={() => handleRemoveRelatedProduct(index)}
                    className="remove-btn"
                  >
                    Remove
                  </button>   {product}
                </li>
              ))}
            </ul>
            </div>
          

          {/* ส่วนของ Review Link */}
          <div className="review-links-field">
            <input
              type="url"
              name="reviewLink"
              placeholder="Add link for sale (https://...)"
              value={formData.reviewLink}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="form-group file-upload">
              <label htmlFor="file">
              Upload Image File <i className="fas fa-upload"></i>
              </label>
              <input
                  type="file"
                  id="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
              />
          </div>

          <div className="form-row">
            <button
              type="button"
              className={`price-btn ${selectedPrice === "weekly" ? "selected" : ""}`}
              onClick={() => setSelectedPrice("weekly")}
            >
              ฿ 1,000 / week
            </button>
            <button
              type="button"
              className={`price-btn ${selectedPrice === "monthly" ? "selected" : ""}`}
              onClick={() => setSelectedPrice("monthly")}
            >
              ฿ 3,000 / month
            </button>
          </div>

          <button type="submit" className="submit-btn"> 
            Add Product 
          </button>
        </form>
    </div>  
  </header>
);

};

export default AddProductForm;
