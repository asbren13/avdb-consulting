import PortfolioCarousel from './PortfolioCarousel';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

import './Portfolio.css';

const Portfolio = () => (
  <div className="portfolio flex flex-col flex-grow h-full bg-cream">
    <Navigation showLogo />
    <div className="flex flex-col w-3/4 lg:w-1/2 mt-12 lg:mt-24 ml-10 lg:ml-56 pr-3 text-content text-red">
      <div className="text-5xl leading-normal mt-8 mb-1">People & brands we’re proud and passionate to work with.</div>
    </div>
    <div className="flex w-full h-full overflow-x-auto mt-16 mb-24">
      <PortfolioCarousel />
    </div>
    <div className="portfolio-content flex flex-col flex-grow w-full bg-cream">
      <div className="porfolio-text flex flex-col items-center justify-center">
        <div className="text-2xl md:text-2xl lg:text-5xl text-secondary mt-14">Case studies available upon request</div>
        <a
          className="button rounded-full mt-7 mb-6 font-secondary bg-cream text-red"
          target="_blank"
          rel="noreferrer"
          href="mailto:alisongvdb@gmail.com?subject=Request case studies"
        >
          request case studies
        </a>
      </div>
      <Footer lightFooter showExpanded />
    </div>
  </div>
);

export default Portfolio;
