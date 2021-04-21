import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import routes from '../RouteConstants';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import appLogoSand from '../assets/images/avdb-logo-sand.png';
import './Navigation.css';

const Navigation = ({ showLogo, lightNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = handleKeyDown;
    window.addEventListener('keydown', onKeyDown);
    return function cleanup() {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  function handleKeyDown(e) {
    const event = e || window.event;
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }

  const navTabs = [
    { route: routes.home, label: 'home', key: 0 },
    { route: routes.about, label: 'about', key: 1 },
    { route: routes.team, label: 'team', key: 2 },
    { route: routes.portfolio, label: 'portfolio', key: 3 },
    { route: routes.contact, label: 'contact', key: 4 },
  ];
  return (
    <div
      className={classNames('flex mx-0 md:mx-10 lg:mx-0', {
        'justify-between': showLogo,
        'justify-end': !showLogo,
        'text-primary': !lightNav,
        'text-secondary': lightNav,
      })}
    >
      <div
        className={classNames('mobile-nav bg-red w-full flex flex-col justify-end pt-10 pl-7 lg:pl-14', {
          closed: !isOpen,
        })}
      >
        <div className="close-button-container flex justify-between">
          <img className="nav-logo h-14 md:h-24 sm:h-full" src={appLogoCream} alt="AVDB Consulting" />
          <button type="button" className="close-button mr-8" tabIndex="0" onClick={() => setIsOpen(false)}>
            <div className="close-left" />
            <div className="close-right" />
          </button>
        </div>
        <div className="mobile-menu h-full pr-6 md:pr-16 text-secondary">
          <nav className="flex flex-col h-full mx-5 text-2xl md:text-4xl text-right">
            {navTabs.map((nav) => (
              <Link key={nav.key} className="my-3 md:my-6" to={nav.route}>{nav.label}</Link>
            ))}
          </nav>
        </div>
      </div>
      {showLogo && (
        <Link to={routes.home}>
          <img
            className="nav-logo h-14 md:h-24 sm:h-20 mt-3 ml-3 md:mt-6 lg:mt-9 md:ml-8 lg:ml-14"
            src={!lightNav ? appLogoSand : appLogoCream}
            alt="AVDB Consulting"
          />
        </Link>
      )}
      <div className="button-container flex items-center mt-5 mr-8 md:mt-10 md:mr-10 p-0">
        <a className="linkedin-icon mr-4 text-3xl" href="https://www.linkedin.com/in/alisonvdb/" target="_blank" rel="noreferrer noopener">
          <i className="fab fa-linkedin" />
        </a>
        <button type="button" className="open-button" onClick={() => setIsOpen(true)}>
          <div className="top" />
          <div className="med my-2" />
          <div className="bottom" />
        </button>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  showLogo: PropTypes.bool,
  lightNav: PropTypes.bool,
};

Navigation.defaultProps = {
  showLogo: true,
  lightNav: false,
};

export default Navigation;
