import Navbar from './navbar';
import HeroSection from './hero';
import FeaturesSection from './featuresection';
import PropertySection from './propertysection';
import AboutSection from './aboutsection';
import ClientSection from './clientsection';
import Cta from './cta';
import Faq from './faq';
import Footer from './footer';
import './index.css';
import Contact from './contact';
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar/>
      </div>
      <div className="hero">
        <HeroSection/>
      </div>
      <div className="feature">
        <FeaturesSection/>
      </div>
      <div className="property">
        <PropertySection />
      </div>
      <div className="about">
        <AboutSection/>
      </div>
      <div className="cta">
        <Cta/>
      </div>
      <div className="faq">
        <Faq/>
      </div>
      <div className="client">
        <ClientSection/>
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
