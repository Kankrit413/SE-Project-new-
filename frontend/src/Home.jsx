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
                    padding: "1rem",
                }}
            >
                <div style={{ flex: 1 }}></div>

                <h1
                    onClick={goToTop}
                    style={{
                        flex: 1,
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                >
                    Skinmatch
                </h1>

                <div
                    className="header-buttons"
                    style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px",
                    }}
                >
                    <Link to="/add-product" style={{ textDecoration: "none", color: "black" }}>
                        Contact
                    </Link>
                    {username ? (
                        <Link
                            to="/profile"
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "16px",
                                fontWeight: "500",
                            }}
                        >
                            Hello, {username}
                        </Link>
                    ) : (
                        <>
                            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
                                Register
                            </Link>
                            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
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
                        backgroundColor: selectedType === "all" ? "#f8d7da" : "#e0e0e0",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "50px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <FaHome size={20} color="#ffffff" />
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
            backgroundColor: "#e0e0e0", // Button background color
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px", // Circular button
            height: "50px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for style
        }}
    >
        <FaSearch size={24} color="#ffffff" /> {/* Icon color changed to white */}
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
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for modern look
            width: "300px", // Make search bar wider
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
                            padding: "10px 20px",
                            margin: "0 10px",
                            border: "none",
                            borderRadius: "20px",
                            backgroundColor: selectedType === type ? "#f8d7da" : "#e0e0e0",
                            cursor: "pointer",
                        }}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
            
            {/* What About Us Section */}
            <section className="about-us" style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>What About Us</h2>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.5", marginTop: "1rem" }}>
                    We are a leading platform dedicated to matching your skin with the best products
                    available. Whether you're looking for the perfect sunscreen, a gentle cleanser,
                    or a hydrating moisturizer, we’ve got you covered. Our mission is to help you
                    find products that are tailored to your unique skin type and needs, ensuring
                    both beauty and health.
                </p>
            </section>

            {/* Products Type Section */}
            <div className="content-container">
                <h2>Product Recommend</h2>
                <div className="product-slider">
                    {loading ? (
                        <div>Loading...</div>
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <div
                                className="product-item"
                                onClick={() => goToProductDetail(product._id)}
                                key={product._id}
                            >
                                <img
                                    src={`http://localhost:5000${product.imageUrl}` || "https://via.placeholder.com/150"}
                                    alt={product.name}
                                    style={{ width: "150px", height: "150px" }}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/150";
                                    }}
                                />
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">
                                    {product.price || "No price available"}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No products found</div>
                    )}
                </div>
            </div>
            <section id="sunscreen" className="products">
                <h2>Sunscreen</h2>
                <div className="product-type-slider">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        products
                            .filter((product) => product.type === "sunscreen") // กรองสินค้าเฉพาะประเภท sunscreen
                            .map((product) => (
                                <div
                                    className="product-item"
                                    key={product.id}
                                    onClick={() => goToProductDetail(product._id)}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>{product.price} THB</p>
                                </div>
                            ))
                    )}
                </div>
            </section>
            <section id="cleanser" className="products">
                <h2>Cleanser</h2>
                <div className="product-type-slider">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        products
                            .filter((product) => product.type === "cleanser") // กรองสินค้าเฉพาะประเภท cleanser
                            .map((product) => (
                                <div
                                    className="product-item"
                                    key={product.id}
                                    onClick={() => goToProductDetail(product._id)}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>{product.price} THB</p>
                                </div>
                            ))
                    )}
                </div>
            </section>
            <section id="moisturizer" className="products">
                <h2>Moisturizer</h2>
                <div className="product-type-slider">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        products
                            .filter((product) => product.type === "moisturizer") // กรองสินค้าเฉพาะประเภท moisturizer
                            .map((product) => (
                                <div
                                    className="product-item"
                                    key={product.id}
                                    onClick={() => goToProductDetail(product._id)}
                                >
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.name}</p>
                                    <p>{product.price} THB</p>
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