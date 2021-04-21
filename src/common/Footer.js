import PropTypes from 'prop-types';
import classNames from 'classnames';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import './Footer.css';

const Footer = ({ lightFooter, showExpanded, redFooter }) => (
  <footer
    className={classNames('footer-section flex flex-col items-center w-full', {
      light: lightFooter,
      'sand bg-cream': !lightFooter && !redFooter,
      red: redFooter,
    })}
  >
    <div className="flex w-full pl-4 lg:pl-10 items-center">
      <div
        className={classNames('footer-text text-base sm:text-lg md:text-xl font-secondary', {
          'text-primary': !lightFooter, 'text-secondary': lightFooter, 'text-red': redFooter,
        })}
      >
        wine · spirits · hospitality
      </div>
      <div className="footer-line flex flex-grow ml-2" />
    </div>
    {showExpanded && (
      <div className="flex flex-col lg:flex-row items-end justify-between bg-red w-full mt-8 px-6 md:px-10 lg:px-14 py-8 lg:py-16 text-secondary">
        <div className="flex items-center h-full">
          <div className="flex flex-col justify-end items-center lg:items-start h-full w-full xl:w-7/12 mb-6 lg:mb-0">
            <div className="text-xl lg:text-3xl font-bold mb-3 lg:mb-6">Let&apos;s get in touch</div>
            <div className="text-lg font-bold pt-2">
              Interested in reimagining your marketing strategy in a post COVID-19 world,
              or just chatting with a like-minded hospitality professional?
            </div>
            <a
              className="flex button rounded-full items-center lg:items-start mt-5 py-1 px-2 md:px-6 lg:px-10 font-secondary bg-cream text-red"
              target="_blank"
              rel="noreferrer"
              href="mailto:alisongvdb@gmail.com?subject=Let's get in touch"
            >
              drop me a line
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full mt-4 lg:mt-0 items-center lg:items-end font-secondary text-right lg:mr-5">
          <img className="h-14 md:h-24 mb-7" src={appLogoCream} alt="AVDB Consulting" />
          <div className="text-lg pb-3">AVDB Consulting</div>
          <div className="text-lg">4500 Broadway</div>
          <div className="text-lg">New York, NY 10001</div>
        </div>
      </div>
    )}
  </footer>
);

Footer.propTypes = {
  lightFooter: PropTypes.bool,
  showExpanded: PropTypes.bool,
  redFooter: PropTypes.bool,
};

Footer.defaultProps = {
  lightFooter: false,
  showExpanded: false,
  redFooter: false,
};

export default Footer;
