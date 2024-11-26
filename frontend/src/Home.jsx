import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { FaHome, FaSearch } from "react-icons/fa"; // Import icons

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("all");
    const navigate = useNavigate();
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("username"); 
        if (loggedInUser) {
            setUsername(loggedInUser);
        }
    }, []);

    const fetchProducts = useCallback(async (type, query = "") => {
        setLoading(true);
        try {
            let url;
            if (type === "all") {
                url = query
                    ? `http://localhost:5000/api/products/search?query=${query}`
                    : `http://localhost:5000/api/products`;
            } else {
                url = `http://localhost:5000/api/products/type/${type}`;
            }

            const response = await axios.get(url);
            if (response.data && Array.isArray(response.data)) {
                setProducts(response.data);
            } else {
                console.error("Invalid response format:", response.data);
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts("all");
    }, [fetchProducts]);

    const handleSearch = useCallback((searchTerm) => {
        setSearchQuery(searchTerm);
        const timeoutId = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                fetchProducts("all", searchTerm);
            } else {
                fetchProducts(selectedType);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [fetchProducts, selectedType]);

    const handleFilterClick = useCallback(
        (type) => {
            setSelectedType(type);
            setSearchQuery("");
    
            // Scroll to the relevant section
            const section = document.getElementById(type);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - document.querySelector(".filter-container").offsetHeight,
                    behavior: "smooth",
                });
            }
        },
        []
    );

    const goToProductDetail = (productId) => {
        navigate(`/product/${productId}`);
    };

    const goToTop = () => {
        setSelectedType("all");
        setSearchQuery("");
        fetchProducts("all");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
        <div className="app-container">
            {/* Header */}
            <header
    className="header"
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 2rem", // Increased padding to create space from the edge
        backgroundColor: "#FCBABC",
    }}
>
    <div style={{ flex: 1 }}></div>

    <div
        onClick={goToTop}
        style={{
            flex: 1,
            textAlign: "center",
            cursor: "pointer",
            color: "white",
            fontSize: "2.2em",
            fontWeight: "bold",
            margin: 0,
        }}
    >
        Skinmatch
    </div>

    <div
        className="header-buttons"
        style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            gap: "1.5rem", // Equal gap between items
            alignItems: "center", // Align items vertically
        }}
    >
        <Link
            to="/add-product"
            style={{
                textDecoration: "none",
                color: "black",
                fontSize: "1.2em",
                fontWeight: "500",
                padding: "0.5rem", // Optional padding for better click area
            }}
        >
            Contact
        </Link>
        {username ? (
            <Link
                to="/profile"
                style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1.2em",
                    fontWeight: "500",
                    padding: "0.5rem", // Optional padding for better click area
                }}
            >
                Hello, {username}
            </Link>
        ) : (
            <>
                <Link
                    to="/register"
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "1.2em",
                        fontWeight: "500",
                        padding: "0.5rem",
                    }}
                >
                    Register
                </Link>
                <Link
                    to="/login"
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "1.2em",
                        fontWeight: "500",
                        padding: "0.5rem",
                    }}
                >
                    Login
                </Link>
            </>
        )}
    </div>
</header>

            {/* Filter section */}
            <div className="filter-container" style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backgroundColor: "#fff",
                    padding: "10px 0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                {/* Home Icon Button */}
                <button
                    className={`filter-button ${selectedType === "all" ? "active" : ""}`}
                    onClick={goToTop}
                    style={{
                        padding: "15px",
                        margin: "0 10px",
                        border: "none",
                        borderRadius: "50%",
                        backgroundColor: selectedType === "all" ? "#FFE5E6" : "#FFE5E6",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <FaHome size={20} color="#FCBABC" />
                </button>

                {/* Search Bar with Toggle */}
<div style={{ position: "relative" }}>
    <button
        className="filter-button"
        onClick={() => {
            // Toggle the visibility of the search bar
            const searchInput = document.querySelector(".search-input");
            if (searchInput) {
                searchInput.style.display =
                    searchInput.style.display === "block" ? "none" : "block";
            }
        }}
        style={{
            padding: "10px",
            margin: "0 10px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#FFE5E6", // Button background color
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px", // Circular button
            height: "50px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for style
        }}
    >
        <FaSearch size={24} color="#FCBABC" /> {/* Icon color changed to white */}
    </button>

    {/* Toggle Search Bar */}
    <input
    type="text"
    className="search-input"
    placeholder="Search for products..."
    value={searchQuery}
    onChange={(e) => handleSearch(e.target.value)}
    style={{
        display: "none", // Initially hidden
        position: "absolute",
        top: "50%",
        left: "110%",
        transform: "translateY(-50%)",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        fontSize: "14px",
        backgroundColor: "#FFE5E6", // Updated background color
        color: "#FCBABC", // Text color inside the input field
        placeholderTextColor: "#FCBABC", // Optional for React styling libraries
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for modern look
        width: "350px", // Extended width of the search bar
        transition: "width 0.3s ease-in-out", // Smooth transition for width change
    }}
/>

</div>
                {/* Filter Buttons */}
                {["sunscreen", "cleanser", "moisturizer"].map((type) => (
    <button
        key={type}
        className={`filter-button ${selectedType === type ? "active" : ""}`}
        onClick={() => handleFilterClick(type)}
        style={{
            padding: "8px 90px",
            margin: "0 10px",
            border: "none",
            borderRadius: "20px",
            backgroundColor: selectedType === type ? "#FBC8C9" : "#FBC8C9",
            color: "#797A7B", // Optional: white text for better readability
            cursor: "pointer",
        }}
    >
        {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
))}
            </div> 
            
            {/* What About Us Section */}
            <section className="about-us" style={{ padding: "2rem 1rem", textAlign: "center" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>What About Us</h2>
                <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
                    <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "1rem"}}>
                        We are a leading platform dedicated to matching your skin with the best products
                        available. Whether you're looking for the perfect sunscreen, a gentle cleanser,
                        or a hydrating moisturizer, we’ve got you covered. Our mission is to help you
                        find products that are tailored to your unique skin type and needs, ensuring
                        both beauty and health.
                    </p>
                </div>
            </section>
            {/* Products Type Section */}
            <div className="content-container">
    <h4 className="product-recommend-title">
        <span className="product">Product</span>
        <span className="recommend"> recommend</span>
    </h4>
    <div className="product-slider">
    {loading ? (
        <div>Loading...</div>
    ) : products.length > 0 ? (
        products.map((product) => (
            <div
                className="product-item"
                key={product.id}
                onClick={() => goToProductDetail(product._id)}
            >
                <img src={product.imageUrl} alt={product.name} /> {/* Updated here */}
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price} THB</p>
            </div>
        ))
    ) : (
        <div>No products found</div>
    )}
</div>
</div>
<section id="sunscreen" className="products">
  <div className="h3-container">
    <h3>Sunscreen</h3>
  </div>
  <div className="product-type-slider-sunscreen">
    {loading ? (
        <p>Loading...</p>
    ) : (
        products
            .filter((product) => product.type === "sunscreen")
            .map((product) => (
                <div
                    className="product-item"
                    key={product.id}
                    onClick={() => goToProductDetail(product._id)}
                >
                    <img src={product.imageUrl} alt={product.name} /> {/* Updated here */}
                    <p className="product-type-name">{product.name}</p>
                    <p className="product-type-price">{product.price} THB</p>
                </div>
            ))
    )}
</div>
</section>

<section id="cleanser" className="products">
  <div className="h3-container">
    <h3>Cleanser</h3>
  </div>
  <div className="product-type-slider-cleanser">
    {loading ? (
        <p>Loading...</p>
    ) : (
        products
            .filter((product) => product.type === "cleanser")
            .map((product) => (
                <div
                    className="product-item"
                    key={product.id}
                    onClick={() => goToProductDetail(product._id)}
                >
                    <img src={product.imageUrl} alt={product.name} /> {/* Updated here */}
                    <p className="product-type-name">{product.name}</p>
                    <p className="product-type-price">{product.price} THB</p>
                </div>
            ))
    )}
</div>
</section>

<section id="moisturizer" className="products">
  <div className="h3-container">
    <h3>Moisturizer</h3>
  </div>
  <div className="product-type-slider-moisturizer">
    {loading ? (
        <p>Loading...</p>
    ) : (
        products
            .filter((product) => product.type === "moisturizer")
            .map((product) => (
                <div
                    className="product-item"
                    key={product.id}
                    onClick={() => goToProductDetail(product._id)}
                >
                    <img src={product.imageUrl} alt={product.name} /> {/* Updated here */}
                    <p className="product-type-name">{product.name}</p>
                    <p className="product-type-price">{product.price} THB</p>
                </div>
            ))
    )}
</div>
</section>

            {/* Footer */}
            <footer className="footer">
                <Link to="/add-product" className="advertise-link">
                    Contact to Advertise
                </Link>
            </footer>
        </div>      
    );
};

export default Home;