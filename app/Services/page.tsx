"use client";
import { useEffect, useState } from "react";

// Static services array (these could also be fetched from backend if you want!)
const services = [
  {
    title: "Spa Therapy",
    description:
      "Experience our relaxing spa therapy with aromatic oils and skilled therapists. Unwind and rejuvenate your mind, body, and soul in a tranquil setting.",
    image: "https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg",
    button: "See More",
    price: "$60",
  },
  {
    title: "Professional Haircut",
    description:
      "Get the perfect haircut and style from our expert stylists. We offer trendy cuts, color, and hair care services tailored to your unique style.",
    image: "https://images.pexels.com/photos/7755251/pexels-photo-7755251.jpeg",
    button: "See More",
    price: "$25",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Pamper your hands and feet with our luxurious manicure and pedicure treatments. Enjoy grooming, exfoliation, and nourishing spa therapy.",
    image: "https://images.pexels.com/photos/19695950/pexels-photo-19695950.jpeg",
    button: "See More",
    price: "$35",
  },
];

export default function ServicesPage() {
  // For showing/hiding prices
  const [showPrice, setShowPrice] = useState(Array(services.length).fill(false));

  // Live products state & fetch from backend
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  // Handler for revealing service price
  const handleSeeMore = (idx) => {
    setShowPrice(showPrice.map((val, i) => (i === idx ? true : val)));
  };

  return (
    <main style={{ background: "#fff", padding: "2rem 0" }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2.6rem",
        fontWeight: 700,
        letterSpacing: "1px",
        marginBottom: "2.5rem",
        fontFamily: "Times New Roman, serif"
      }}>
        Our Services
      </h1>

      {/* Services Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem", maxWidth: "1050px", margin: "0 auto 4rem auto" }}>
        {services.map((service, idx) => (
          <div
            key={service.title}
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "2.5rem",
              background: "#f5e8da", // More visible beige!
              borderRadius: "1.25rem",
              boxShadow: "0 4px 32px #0001",
              padding: "2rem 2rem"
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: "1.7rem",
                fontWeight: "bold",
                marginBottom: "1.1rem",
                fontFamily: "Times New Roman, serif"
              }}>{service.title}</h2>
              <p style={{ fontSize: "1.08rem", marginBottom: "1.3rem", color: "#3c3c3c" }}>{service.description}</p>
              {!showPrice[idx] ? (
                <button style={{
                  background: "#e3cec3",
                  color: "#333",
                  padding: "0.65rem 2.1rem",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "3px",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "background .2s"
                }}
                  onMouseOver={e => e.currentTarget.style.background = "#b3998c"}
                  onMouseOut={e => e.currentTarget.style.background = "#e3cec3"}
                  onClick={() => handleSeeMore(idx)}
                >
                  {service.button}
                </button>
              ) : (
                <p style={{
                  background: "#eed7c3",
                  color: "#6d4c27",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  display: "inline-block",
                  marginTop: "0.6rem",
                  padding: "0.4rem 1.1rem",
                  borderRadius: "7px"
                }}>
                  Service Price: {service.price}
                </p>
              )}
            </div>
            <img
              src={service.image}
              alt={service.title}
              style={{
                flex: 1,
                maxWidth: "370px",
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
                boxShadow: "0 2px 12px #0002"
              }}
            />
          </div>
        ))}
      </div>

      {/* Products Section */}
      <h1 style={{
        textAlign: "center",
        fontSize: "2.2rem",
        fontWeight: 700,
        letterSpacing: "1px",
        margin: "3rem 0 2rem 0",
        fontFamily: "Times New Roman, serif"
      }}>
        Our Products
      </h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: "2.1rem",
        maxWidth: "1100px",
        margin: "0 auto 2.5rem auto",
      }}>
        {products.map(product => (
          <div key={product.id || product.name} style={{
            background: "#f5e8da", // beige for product card too
            borderRadius: "13px",
            boxShadow: "0 4px 16px #0001",
            padding: "1.2rem",
            textAlign: "center"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "155px",
                objectFit: "cover",
                borderRadius: "9px",
                marginBottom: "1.1rem"
              }}
            />
            <h3 style={{ fontFamily: "Times New Roman, serif", fontSize: "1.1rem", fontWeight: "bold", marginBottom: ".5rem" }}>{product.name}</h3>
            <p style={{ fontSize: "1rem", color: "#555" }}>{product.price}</p>
          </div>
        ))}
        {products.length === 0 && (
          <div style={{
            gridColumn: "1/-1",
            textAlign: "center",
            color: "#999",
            fontSize: "1.1rem"
          }}>
            No products yet.
          </div>
        )}
      </div>
    </main>
  );
}
