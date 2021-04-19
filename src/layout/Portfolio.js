import Navigation from '../common/Navigation';
import Footer from '../common/Footer';

import '../assets/css/portfolio.css';

const Portfolio = () => (
  <div className="portfolio flex flex-col flex-grow h-full bg-cream">
    <Navigation showLogo />
    <div className="flex flex-col w-1/2 mt-16 ml-56 mb-10 pr-3 text-content text-red">
      <div className="text-5xl leading-normal">People & brands we’re proud and passionate to work with.</div>
    </div>
    <div className="flex w-full h-full overflow-x-auto my-16">
      <div className="panel-section w-1/3 mx-6 flex items-center justify-center oyster-sunday text-secondary">
        <div className="w-1/2 text-3xl">Oyster Sunday</div>
      </div>
      <div className="panel-section w-1/3 mx-6 flex items-center justify-center oyster-sunday text-secondary">
        <div className="w-1/2 text-3xl">Oyster Sunday</div>
      </div>
      <div className="panel-section w-1/3 mx-6 flex items-center justify-center oyster-sunday text-secondary">
        <div className="w-1/2 text-3xl">Oyster Sunday</div>
      </div>
      <div className="panel-section w-1/3 mx-6 flex items-center justify-center oyster-sunday text-secondary">
        <div className="w-1/2 text-3xl">Oyster Sunday</div>
      </div>
    </div>
    <div className="portfolio-content flex flex-col flex-grow h-full w-full bg-cream">
      <div className="porfolio-text flex flex-col items-center justify-center">
        <div className="text-4xl text-secondary">Case studies available upon request</div>
        <a className="button rounded-full mt-6 mb-6 font-secondary bg-cream text-red" target="_blank" rel="noreferrer" href="mailto:alisongvdb@gmail.com?subject=Request case studies">request case studies</a>
      </div>
      <Footer lightFooter showExpanded />
    </div>
  </div>
);

export default Portfolio;
