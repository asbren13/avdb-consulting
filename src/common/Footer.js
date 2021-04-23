import PropTypes from 'prop-types';
import classNames from 'classnames';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import flowerBottle from '../assets/images/FlowerBottle.png';
import './Footer.css';

const buttonClassName =
  'flex button rounded-full items-center text-sm md:text-base lg:items-start mt-5 py-3 px-4 md:px-6 lg:px-10 font-secondary bg-cream text-red';

const Footer = ({
  lightFooter,
  showExpanded,
  hideTop,
  redFooter,
  hideContact,
}) => (
  <footer
    className={classNames('footer-section flex flex-col items-center w-full', {
      light: lightFooter,
      sand: !lightFooter && !redFooter,
      red: redFooter,
      'bg-cream': !lightFooter && !redFooter && hideTop,
    })}
  >
    {!hideTop && (
      <div className="flex w-full pb-9 pl-4 lg:pl-10 items-center">
        <div
          className={classNames('footer-text text-base sm:text-lg md:text-xl font-secondary', {
            'text-primary': !lightFooter, 'text-secondary': lightFooter, 'text-red': redFooter,
          })}
        >
          wine · spirits · hospitality
        </div>
        <div className="footer-line flex flex-grow ml-2" />
      </div>
    )}
    {showExpanded && (
      <div className="flex flex-col lg:flex-row items-center md:items-end justify-between bg-red w-full px-6 md:px-10 lg:px-14 py-8 lg:py-1">
        <div className="flex items-center lg:items-end h-full py-6 lg:py-10 text-secondary">
          <img className="h-72 xl:mr-8 lg:mt-4" src={flowerBottle} alt="lets get in touch" />
          {!hideContact && (
            <div className="flex flex-col justify-end items-start h-full w-full xl:w-11/12">
              <div className="text-xl lg:text-3xl font-bold mb-3 lg:mb-6">Let&apos;s get in touch</div>
              <div className="text-sm md:text-lg pt-2 font-secondary">
                Interested in reimagining your marketing strategy, or just chatting with like-minded hospitality professionals?
              </div>
              <a
                className={buttonClassName}
                target="_blank"
                rel="noreferrer"
                href="mailto:alison@avdb.co?subject=Let's get in touch"
              >
                drop us a line
              </a>
            </div>
          )}
        </div>
        <div
          className="flex flex-col w-full h-full pb-6 lg:pb-10 mt-4 lg:mt-0 justify-end items-center lg:items-end font-secondary text-right lg:mr-5"
        >
          <img className="h-14 md:h-28 mb-12" src={appLogoCream} alt="AVDB" />
          <div className="text-lg flex items-center text-secondary">
            AVDB
            <a className="linkedin-icon ml-2 text-2xl" href="https://www.linkedin.com/company/avdbmktg/" target="_blank" rel="noreferrer noopener">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="text-lg text-secondary">
            <a href="mailto:alison@avdb.co?subject=Let's get in touch" target="_blank" rel="noreferrer">
              alison@avdb.co
            </a>
          </div>
        </div>
      </div>
    )}
  </footer>
);

Footer.propTypes = {
  hideTop: PropTypes.bool,
  lightFooter: PropTypes.bool,
  showExpanded: PropTypes.bool,
  redFooter: PropTypes.bool,
  hideContact: PropTypes.bool,
};

Footer.defaultProps = {
  hideTop: false,
  lightFooter: false,
  showExpanded: false,
  redFooter: false,
  hideContact: false,
};

export default Footer;
