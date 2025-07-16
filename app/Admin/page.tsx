"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", price: "", image: "" });
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetch("/api/bookings")
      .then((r) => r.json())
      .then(setBookings);
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  // Product add form handlers
  function handleProductChange(e) {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  }

  async function handleProductSubmit(e) {
    e.preventDefault();
    setAdding(true);
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productForm),
    });
    if (res.ok) {
      setProductForm({ name: "", price: "", image: "" });
      fetch("/api/products")
        .then((r) => r.json())
        .then(setProducts);
    }
    setAdding(false);
  }

  // Delete product
  async function handleDeleteProduct(id) {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontFamily: "Times New Roman, serif", fontWeight: "bold", fontSize: "2rem", marginBottom: "2rem", color: "#b18c81ff" }}>
        Admin Dashboard
      </h1>
      {/* Bookings */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: ".7rem" }}>All Bookings</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#f5e8da" }}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Service</th>
                <th style={thStyle}>Message</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id}>
                  <td style={tdStyle}>{b.name}</td>
                  <td style={tdStyle}>{b.phone}</td>
                  <td style={tdStyle}>{b.email}</td>
                  <td style={tdStyle}>{b.date}</td>
                  <td style={tdStyle}>{b.service}</td>
                  <td style={tdStyle}>{b.message}</td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td style={tdStyle} colSpan={6}>No bookings yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add Product Form */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: ".7rem" }}>Add Product</h2>
        <form onSubmit={handleProductSubmit} style={{ display: "flex", gap: "1.2rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1.2rem" }}>
          <input
            type="text"
            name="name"
            value={productForm.name}
            onChange={handleProductChange}
            placeholder="Product Name"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="price"
            value={productForm.price}
            onChange={handleProductChange}
            placeholder="Price (e.g. $25)"
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="image"
            value={productForm.image}
            onChange={handleProductChange}
            placeholder="Image URL"
            required
            style={inputStyle}
          />
          <button
            type="submit"
            disabled={adding}
            style={{
              ...inputStyle,
              background: "#b18c81",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              minWidth: "120px"
            }}
          >
            {adding ? "Adding..." : "Add Product"}
          </button>
        </form>
        {/* Products Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#f5e8da" }}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td style={tdStyle}>{p.name}</td>
                  <td style={tdStyle}>{p.price}</td>
                  <td style={tdStyle}>
                    <img src={p.image} alt={p.name} style={{ width: "60px", borderRadius: "7px" }} />
                  </td>
                  <td style={tdStyle}>
                    <button
                      onClick={() => handleDeleteProduct(p.id)}
                      style={{
                        background: "#e57373",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        padding: "0.4rem 0.8rem",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontFamily: "Times New Roman, serif",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr><td style={tdStyle} colSpan={4}>No products yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid #dfd0c3",
  background: "#f2e0c9",
  fontWeight: 600,
  fontFamily: "Times New Roman, serif"
};
const tdStyle = {
  padding: "10px",
  border: "1px solid #dfd0c3",
  fontFamily: "Times New Roman, serif"
};
const inputStyle = {
  fontSize: "1rem",
  padding: ".7rem .9rem",
  border: "1.6px solid #e3cec3",
  borderRadius: "6px",
  outline: "none",
  fontFamily: "Times New Roman, serif",
  marginBottom: 0,
  background: "#fff",
  color: "#222",
  minWidth: "150px"
};
