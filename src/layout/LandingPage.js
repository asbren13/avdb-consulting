import { Link } from 'react-router-dom';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import { routes } from '../RouteConstants';
import landingLogo from '../assets/images/landing-logo.png';

const LandingPage = () => (
  <div className="flex flex-col bg-cream h-screen pb-10">
    <Navigation showLogo={false} lightNav={false} />
    <div className="h-full flex items-center justify-center" id="landing-page">
      <Link to={routes.home}>
        <img className="" src={landingLogo} alt="AVDB consulting" />
      </Link>
    </div>
    <Footer lightNav />
  </div>
);

export default LandingPage;
