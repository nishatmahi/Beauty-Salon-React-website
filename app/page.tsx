import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], style: "italic", weight: "700" });
export default function Home() {
  return (
    <main>
      {/* Top Parallax Hero Section */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5005149/pexels-photo-5005149.jpeg')",
          height: "70vh",
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
        <div
          style={{
            textAlign: "center",
            color: "white",
            zIndex: 2,
            width: "100%",
          }}
        >
        <h1
          className={playfair.className}
          style={{
            fontSize: "4.5rem",
            fontWeight: "bold",
            letterSpacing: "4px",
            textShadow: "2px 2px 12px #222",
            marginBottom: "1rem",
            fontStyle: "italic",
    // No need to specify fontFamily, className does it
          }}
          >
          MUSE Spa &amp; Salon
          </h1>

          <p style={{
            fontSize: "1.3rem",
            marginBottom: "2rem",
            letterSpacing: "2px",
            textShadow: "1px 1px 8px #222"
          }}>
            beauty + culture + grace
          </p>
          
        </div>
      </div>

      {/* About/Intro Section */}
      <section style={{
        padding: "3rem 1rem",
        background: "#fff",
        textAlign: "center"
      }}>
        <h2 style={{
          fontWeight: 600,
          fontSize: "2rem",
          marginBottom: "1.5rem"
        }}>
          The Ultimate Luxury Spa &amp; Salon in Harlem
        </h2>
        <p style={{
          maxWidth: "850px",
          margin: "0 auto",
          fontSize: "1.08rem",
          color: "#444",
          lineHeight: 1.7
        }}>
          You can now relax and join the elite at MUSE Spa and Salon. MUSE, located in multiple locations, offers top of the line service and expertise in all facets of beauty and hair. MUSE is a top contender for hair salons and spas. Exceptional service and exceptional results are standard practice at MUSE. We offer all services ranging from deep tissue massages to mink lash extensions and beyond. Our stylists are seasoned in all aspects of beauty, making it simple to assist in finding the perfect fit for your styling needs.
        </p>
      </section>

      {/* Bottom Parallax Quote Section */}
      <div
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4971453/pexels-photo-4971453.jpeg')",
          height: "70vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{
          color: "white",
          fontSize: "2.1rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px #000",
          maxWidth: "800px",
          textAlign: "center"
        }}>
          “Fall in love with taking care of yourself.{" "}
          <span style={{ color: "#FFD700" }}>Mind Body &amp; Spirit.</span>”
        </div>
      </div>

      {/* Optional: Extra White Section at the Bottom */}
      <section style={{
        padding: "3rem 1rem",
        background: "#fff",
        textAlign: "center"
      }}>
        <h2 style={{
          fontWeight: 600,
          fontSize: "1.4rem",
          marginBottom: "1.2rem"
        }}>
          Our Signature Treatments
        </h2>
        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "1rem",
          color: "#444"
        }}>
          Discover our exclusive therapies and packages designed to rejuvenate your body, mind, and spirit.
        </p>
      </section>
    </main>
  );
}
