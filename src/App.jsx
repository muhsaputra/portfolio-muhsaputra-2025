import CardNav from "./components/layout/Navigation";
import { navigationItems } from "./data/navigationItems";
// Sections
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import ScrollVelocity from "./components/ui/ScrollVelocity";
import PortfolioSection from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <CardNav
        // logo={logo}
        logoAlt="Company Logo"
        items={navigationItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* <HeroSection /> */}
      <HeroSection />

      <ScrollVelocity
        texts={["Muhamad Tri Saputra · Portfolio 2025 · "]}
        velocity={10}
        className="custom-scroll-text"
      />

      {/* About Section */}
      <AboutSection />
      <PortfolioSection />

      <Contact />

      <Footer />
    </>
  );
}
export default App;
