import Main from './layout/Main';
import AboutMeSection from './layout/AboutMe';
import AboutAVDBSection from './layout/AboutAVDB';
import ServicesSection from './layout/Services';
import CurrentClientsSection from './layout/CurrentClients';
import FormerEmployersSection from './layout/FormerEmployers';
import CaseStudiesSection from './layout/CaseStudies';
import ContactSection from './layout/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Main />
        <AboutMeSection />
        <AboutAVDBSection />
        <ServicesSection />
        <CurrentClientsSection />
        <FormerEmployersSection />
        <CaseStudiesSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
