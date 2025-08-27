import CardNav from "./components/layout/Navigation";
import { navigationItems } from "./data/navigationItems";
// Sections
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";

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
      {/* About Section */}
      <AboutSection />
    </>
  );
}
export default App;
