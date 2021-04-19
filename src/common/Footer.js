import PropTypes from 'prop-types';
import classNames from 'classnames';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import './Footer.css';

const Footer = ({ lightFooter, showExpanded, redFooter }) => (
  <footer
    className={classNames('footer-section flex flex-col items-center w-full', {
      light: lightFooter, sand: !lightFooter && !redFooter, red: redFooter,
    })}
  >
    <div className="flex w-full pl-10 items-center">
      <div
        className={classNames('footer-text text-xl font-secondary', {
          'text-primary': !lightFooter, 'text-secondary': lightFooter, 'text-red': redFooter,
        })}
      >
        wine · spirits · hospitality
      </div>
      <div className="footer-line flex flex-grow ml-2" />
    </div>
    {showExpanded && (
      <div className="flex items-end justify-between bg-red w-full mt-8 px-14 py-16 text-secondary">
        <div className="flex items-center h-full">
          <div className="flex flex-col justify-end h-full w-7/12">
            <div className="text-3xl font-bold mb-6">Let&apos;s get in touch</div>
            <div className="text-lg font-bold pt-2">
              Interested in reimagining your marketing strategy in a post COVID-19 world,
              or just chatting with a like-minded hospitality professional?
            </div>
            <a
              className="button rounded-full mt-5 py-1 px-10 font-secondary bg-cream text-red"
              target="_blank"
              rel="noreferrer"
              href="mailto:alisongvdb@gmail.com?subject=Let's get in touch"
            >
              drop me a line
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end font-secondary text-right mr-5">
          <img className="footer-logo mb-7" src={appLogoCream} alt="AVDB Consulting" />
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
