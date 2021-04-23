import { Link } from 'react-router-dom';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import routes from '../RouteConstants';
import landingLogo from '../assets/images/landing-logo.png';

const LandingPage = () => (
  <div className="flex flex-col bg-cream h-screen">
    <Navigation showLogo={false} lightNav={false} />
    <Link className="h-full flex items-center justify-center bg-inherit" id="landing-page" to={routes.home}>
      <div>
        <img className="w-2/3 h-2/3 flex items-center justify-center mx-auto" src={landingLogo} alt="AVDB" />
      </div>
    </Link>
    <Footer lightNav />
  </div>
);

export default LandingPage;
