"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const founders = [
  {
    name: "Priya Saha",
    title: "Founder & Creative Director",
    description: "With over 20 years in the beauty industry, Priya brings passion, artistry, and vision to Glamour Beauty Parlour.",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
  },
  {
    name: "Tanisha Rahman",
    title: "Co-Founder & Master Stylist",
    description: "An award-winning stylist, Tanisha is known for her innovative styles and dedication to client care.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const stylists = [
  {
    name: "Sadia Haque",
    role: "Senior Stylist",
    image: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg",
  },
  {
    name: "Ariana Ahmed",
    role: "Nail & Spa Expert",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "Shuvo Das",
    role: "Men’s Hair Specialist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Lamia Chowdhury",
    role: "Bridal Makeup Artist",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    name: "Ayesha Khatun",
    role: "Junior Stylist",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Mizanur Rahman",
    role: "Hair Colorist",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function StylistsPage() {
  return (
    <main>
      {/* Parallax Hero Section */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/18821600/pexels-photo-18821600.jpeg')",
          height: "48vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{
          textAlign: "center",
          color: "white",
          zIndex: 2,
          width: "100%",
        }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "bold",
            letterSpacing: "3px",
            textShadow: "2px 2px 12px #222",
            marginBottom: "1rem",
            fontStyle: "italic",
            fontFamily: "Times New Roman, serif"
          }}>
            Meet Our Team
          </h1>
          <p style={{
            fontSize: "1.3rem",
            marginBottom: "2rem",
            letterSpacing: "2px",
            textShadow: "1px 1px 8px #222"
          }}>
            Masters of beauty, ready to create your signature look
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        maxWidth: "850px",
        margin: "3rem auto 2.5rem auto"
      }}>
        {founders.map(founder => (
          <div key={founder.name} style={{
            background: "#f5e8da",
            borderRadius: "15px",
            boxShadow: "0 4px 24px #0001",
            padding: "2rem 1.2rem",
            textAlign: "center"
          }}>
            <img
              src={founder.image}
              alt={founder.name}
              style={{
                width: "140px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "1.2rem",
                border: "4px solid #e3cec3b5"
              }}
            />
            <h2 style={{
              fontFamily: "Times New Roman, serif",
              fontWeight: 700,
              fontSize: "1.4rem",
              marginBottom: ".3rem"
            }}>{founder.name}</h2>
            <h3 style={{
              fontWeight: 400,
              color: "#b19981ff",
              fontSize: "1rem",
              marginBottom: ".8rem"
            }}>{founder.title}</h3>
            <p style={{ color: "#333", fontSize: "1rem" }}>{founder.description}</p>
          </div>
        ))}
      </div>

      {/* Stylists Carousel */}
      <h2 style={{
        textAlign: "center",
        margin: "2.5rem 0 1.3rem 0",
        fontFamily: "Times New Roman, serif",
        fontWeight: "bold",
        fontSize: "2rem"
      }}>
        Our Stylists
      </h2>
      <div style={{ maxWidth: "1050px", margin: "0 auto 3rem auto", position: "relative" }}>
        <KeenSliderMultiCards stylists={stylists} />
      </div>
    </main>
  );
}

// Carousel Component (4 cards per view, 1 scroll per action, with arrows & dots)
function KeenSliderMultiCards({ stylists }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 4, spacing: 24 },
    loop: true,
    mode: "free-snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <div ref={sliderRef} className="keen-slider">
        {stylists.map((stylist) => (
          <div key={stylist.name} className="keen-slider__slide" style={{
            background: "#f5e8da",
            borderRadius: "12px",
            boxShadow: "0 2px 16px #0001",
            padding: "1.6rem 1rem",
            textAlign: "center",
            minHeight: "260px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img
              src={stylist.image}
              alt={stylist.name}
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "1rem",
                border: "3px solid #f5e8da"
              }}
            />
            <h3 style={{
              fontFamily: "Times New Roman, serif",
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: ".3rem"
            }}>{stylist.name}</h3>
            <p style={{ color: "#b18c81ff", fontSize: "1rem", fontWeight: 500 }}>{stylist.role}</p>
          </div>
        ))}
      </div>
      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={() => instanceRef.current?.prev()}
        style={{
          position: "absolute", left: "-38px", top: "50%", transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)", border: "none", borderRadius: "50%",
          width: "34px", height: "34px", fontSize: "1.7rem", cursor: "pointer", zIndex: 2, boxShadow: "0 2px 10px #0002"
        }}
      >&#8592;</button>
      <button
        aria-label="Next"
        onClick={() => instanceRef.current?.next()}
        style={{
          position: "absolute", right: "-38px", top: "50%", transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)", border: "none", borderRadius: "50%",
          width: "34px", height: "34px", fontSize: "1.7rem", cursor: "pointer", zIndex: 2, boxShadow: "0 2px 10px #0002"
        }}
      >&#8594;</button>
      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1.2rem", gap: "0.5rem" }}>
        {stylists.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: currentSlide === idx ? "14px" : "10px",
              height: "10px",
              borderRadius: "50%",
              background: currentSlide === idx ? "#b19781" : "#eee",
              transition: "all 0.2s"
            }}
          />
        ))}
      </div>
    </div>
  );
}
