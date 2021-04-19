import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import feather from '../assets/images/Feather.svg';
import flower from '../assets/images/Flower.svg';
import wineGlass from '../assets/images/WineGlass.svg';
import '../assets/css/about.css';

const About = () => (
  <div className="about flex flex-col h-full">
    <div className="header-section-main w-full">
      <div className="header-section-content relative h-full">
        <Navigation showLogo lightNav />
        <div className="flex flex-col w-3/5 mt-16 ml-56 text-content text-secondary">
          <div className="text-5xl leading-normal mb-12">Everything we do is rooted in a deep belief in the power of hospitality.</div>
          <div className="text-xl mb-3">AVDB provides full-service marketing and business development support to hospitality and wine brands. An external arm to your team, AVDB leverages your goals to provide strategy, develop brand positioning based on relevant audience insights, and tell your story to increase sales.</div>
          <div className="text-xl">We are honored to work with clients who are intentional, mission-oriented and strive to improve their respective industries.  </div>
        </div>
      </div>
    </div>
    <div className="about-content bg-cream flex flex-col w-full">
      <div className="content-section flex items-center w-4/5 my-14 mx-auto text-red">
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={feather} alt="storytelling" />
          <div className="text-2xl">Storytelling</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-base font-secondary">Marketing Strategy + Execution Thought Leadership + Public Relations Social Media Strategy + Execution Paid Social Advertisements</div>
        </div>
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={flower} alt="business development" />
          <div className="text-2xl">Business Development</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-base font-secondary">Revenue Development Strategy New Business Pitching Partnership Relations Virtual Wine Tastings + Events</div>
        </div>
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={wineGlass} alt="consultation" />
          <div className="text-2xl">Consultation</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-base font-secondary">Not sure what you're looking for yet, but still want to chat? Email me for  a free brand consultation, where we can chat strategy about marketing and business development</div>
        </div>
      </div>
      <Footer redFooter showExpanded />
    </div>
  </div>
);

export default About;
