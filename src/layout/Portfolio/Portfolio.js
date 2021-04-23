import classNames from 'classnames';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

import PortfolioTextContent from './PortfolioTextContent';
import brownMarketing from './images/logos/brown.png';
import chufly from './images/logos/Chufly.png';
import kevinZraly from './images/logos/Kevin Zraly-01.png';
import newDeal from './images/logos/new-deal.png';
import oysterSunday from './images/logos/Oyster Sunday.png';
import thatcher from './images/logos/Thatcher 2.png';
import mezcal from './images/logos/The Mezcal Som.png';
import vinSocial from './images/logos/vin social.png';

import './Portfolio.css';

const Portfolio = () => {
  const clients = [
    {
      id: 'oyster',
      textContent: PortfolioTextContent.oysterSunday,
      bgClass: 'oyster-sunday',
      logoSrc: oysterSunday,
      url: 'https://www.oystersunday.com/',
      altText: 'Oyster Sunday',
    },
    {
      id: 'chufly',
      textContent: PortfolioTextContent.chufly,
      bgClass: 'chufly-imports',
      logoSrc: chufly,
      url: 'https://chufly.com/',
      altText: 'Chufly Imports',
    },
    {
      id: 'vin-social',
      textContent: PortfolioTextContent.vinSocial,
      bgClass: 'vin-social',
      logoSrc: vinSocial,
      url: 'https://vinsocial.co/',
      altText: 'Vin Social',
    },
    {
      id: 'new-deal',
      textContent: PortfolioTextContent.newDeal,
      bgClass: 'new-deal',
      logoSrc: newDeal,
      url: 'https://www.newdealhospitality.com/',
      altText: 'New Deal Hospitality',
    },
    {
      id: 'thatcher',
      textContent: PortfolioTextContent.thatcher,
      bgClass: 'thatcher-wine',
      logoSrc: thatcher,
      url: 'https://thatcherswineconsulting.com/pages/services',
      altText: 'Thatcher Wine',
    },
    {
      id: 'mezcal',
      textContent: PortfolioTextContent.mezcal,
      bgClass: 'mezcal-som',
      logoSrc: mezcal,
      url: 'https://www.themezcalsommelier.com/',
      altText: 'Mezcal Sommelier',
    },
    {
      id: 'brown-marketing',
      textContent: PortfolioTextContent.brownMarketing,
      bgClass: 'brown-marketing',
      logoSrc: brownMarketing,
      url: 'https://brown-marketing.com/services',
      altText: 'Brown Marketing',
    },
    {
      id: 'kevin-zraly',
      textContent: PortfolioTextContent.kevinZraly,
      bgClass: 'kevin-zraly',
      logoSrc: kevinZraly,
      url: 'https://www.kevinzraly.com/',
      altText: 'Kevin Zraly',
    },
  ];

  return (
    <div className="portfolio flex flex-col flex-grow h-full bg-cream">
      <Navigation showLogo />
      <div className="flex flex-col w-3/4 lg:w-1/2 mt-12 lg:mt-24 ml-10 lg:ml-56 pr-3 text-content text-red">
        <div className="text-2xl md:text-5xl leading-normal mt-8 mb-1">People & brands we’re proud and passionate to work with.</div>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full h-full overflow-x-auto px-5 lg:mt-16 lg:mb-24 lg:px-10">
        {clients.map((client) => (
          <div
            key={client.id}
            className={classNames(
              client.bgClass,
              'h-300 sm:h-375 lg:h-510 w-full sm:w-3/4 md:w-46p lg:w-40p xl:w-44p bg-cover bg-no-repeat my-5 mx-2 lg:my-10 lg:mx-10',
            )}
          >
            <div className="panel-section h-full w-full text-secondary">
              <a className="h-full w-full" href={client.url} target="_blank" rel="noreferrer">
                <div className="panel-content h-full w-full flex flex-col items-center py-3 px-4 lg:py-12 lg:px-16">
                  <div className="panel-header w-full h-16 sm:h-24 md:h-200 flex items-center justify-center">
                    <img className="max-h-full m-w-1/2" src={client.logoSrc} alt={client.altText} />
                  </div>
                  <div className="panel-text mt-3 text-base lg:text-lg text-center font-secondary">{client.textContent}</div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-content flex flex-col flex-grow w-full bg-cream">
        <div className="porfolio-text flex flex-col items-center justify-center">
          <div className="w-5/6 text-center text-2xl md:text-2xl lg:text-5xl text-secondary mt-14">
            Case studies and references available by request
          </div>
          <a
            className="button rounded-full mt-7 mb-6 px-6 py-3 font-secondary bg-cream text-red"
            target="_blank"
            rel="noreferrer"
            href="mailto:alison@avdb.co?subject=Request case studies"
          >
            request case studies
          </a>
        </div>
        <Footer lightFooter />
      </div>
      <Footer showExpanded hideTop />
    </div>
  );
};

export default Portfolio;
