import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f9ebe2", marginBottom: "0.5rem" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/Services" style={{ marginRight: "1rem" }}>Services</Link>
      <Link href="/Stylists" style={{ marginRight: "1rem" }}>Stylists</Link>
      <Link href="/Bookings">Bookings</Link>
    </nav>
  );
}
