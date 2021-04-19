import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import feather from './images/feather.png';
import flower from './images/flowers.png';
import wine from './images/wine.png';
import './About.css';

const About = () => (
  <div className="about flex flex-col h-full">
    <div className="header-section-main w-full">
      <div className="header-section-content relative h-full">
        <Navigation showLogo lightNav />
        <div className="flex flex-col w-3/5 mt-24 ml-56 text-content text-secondary">
          <div className="text-5xl leading-normal mb-9">Everything we do is rooted in a deep belief in the power of hospitality.</div>
          <div className="text-xl mb-3 font-secondary">AVDB provides full-service marketing and business development support to hospitality and wine brands. An external arm to your team, AVDB leverages your goals to provide strategy, develop brand positioning based on relevant audience insights, and tell your story to increase sales.</div>
          <div className="text-xl font-secondary">We are honored to work with clients who are intentional, mission-oriented and strive to improve their respective industries.  </div>
        </div>
      </div>
    </div>
    <div className="about-content bg-cream flex flex-col w-full pt-4">
      <div className="content-section flex items-start h-full w-4/5 mt-14 mb-16 mx-auto text-red">
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={feather} alt="storytelling" />
          <div className="text-3xl">Storytelling</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-lg leading-snug font-secondary px-1">
            Marketing Strategy + Execution
            Thought Leadership + Public Relations
            Social Media Strategy + Execution Paid Social Advertisements
          </div>
        </div>
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={flower} alt="business development" />
          <div className="text-3xl px-8">Business Development</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-lg leading-snug font-secondary px-1">
            Revenue Development Strategy<br />
            New Business Pitching<br />
            Partnership Relations<br />
            Virtual Wine Tastings + Events<br />
        </div>
        </div>
        <div className="flex flex-col text-center w-1/3 px-3">
          <img className="mx-auto mb-6" src={wine} alt="consultation" />
          <div className="text-3xl">Consultation</div>
          <div className="vertical-line mx-auto my-2" />
          <div className="text-lg leading-snug font-secondary px-1">Not sure what you're looking for yet, but still want to chat? Email me for  a free brand consultation, where we can chat strategy about marketing and business development</div>
        </div>
      </div>
      <Footer redFooter showExpanded />
    </div>
  </div>
);

export default About;
