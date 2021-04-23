import { Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import routes from '../../RouteConstants';
import Footer from '../../common/Footer';
import feather from './images/feather.png';
import flower from './images/flowers.png';
import wine from './images/wine.png';
import './About.css';

const className =
  'header-section-text flex flex-col h-3/4 items-center justify-center sm:w-full md:w-11/12 lg:w-7/12 md:ml-12 lg:ml-52 mx-4 text-secondary';

const About = () => (
  <div className="about flex flex-col h-full">
    <div className="header-section-main bg-cream  w-full">
      <div className="header-section-content relative h-full">
        <Navigation showLogo lightNav />
        <div className={className}>
          <div className="text-2xl sm:text-5xl leading-normal mb-6 sm:mb-9">
            Everything we do is rooted in a deep belief in the power of hospitality.
          </div>
          <div className="text-base sm:text-xl mb-3 font-secondary">
            AVDB provides full-service marketing and business development support to hospitality and wine brands.
            An external arm to your team, AVDB leverages your goals to provide strategy,
            develop brand positioning based on relevant audience insights,
            and tell your story to increase sales.
          </div>
          <div className="text-base sm:text-xl font-secondary">
            We are honored to&nbsp;
            <Link className="underlined" to={routes.portfolio}>work with clients</Link>
            &nbsp;who are intentional and mission-oriented, and who strive to improve their respective industries.
          </div>
        </div>
      </div>
    </div>
    <div className="about-content bg-cream flex flex-col w-full pt-4">
      <div className="content-section flex flex-col lg:flex-row lg:justify-between items-start h-full w-full lg:w-4/5 mt-14 mb-16 mx-auto text-red">
        <div className="flex flex-col items-center text-center w-full lg:w-1/3 my-4 lg:my-0">
          <img className="mx-auto mb-6" src={flower} alt="business development" />
          <div className="text-center text-3xl px-3">Business Development</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-lg leading-snug font-secondary">
            <div>Revenue Development Strategy</div>
            <div>New Business Pitching</div>
            <div>Partnership Relations</div>
            <div>Virtual Wine Tastings + Events</div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full lg:w-1/3 my-4 lg:my-0">
          <img className="mx-auto mb-6" src={feather} alt="storytelling" />
          <div className="text-3xl text-center">Storytelling</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-lg leading-snug font-secondary px-1">
            <div>Marketing Strategy + Execution</div>
            <div>Thought Leadership + Public Relations</div>
            <div>Social Media Strategy + Execution</div>
            <div>Paid Social Advertisements</div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full lg:w-1/3 my-4 lg:my-0">
          <img className="mx-auto mb-6" src={wine} alt="consultation" />
          <div className="text-3xl text-center">Strategic Consultations</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="flex w-3/4 md:w-3/5 lg:w-full text-lg leading-snug font-secondary px-1">
            Not sure what you&apos;re looking for yet, but still want to chat?
            Email us for a free consultation, where we can chat strategy around marketing and business development as you are scaling.
          </div>
        </div>
      </div>
      <Footer redFooter showExpanded />
    </div>
  </div>
);

export default About;
