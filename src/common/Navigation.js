import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { routes } from '../RouteConstants';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import appLogoSand from '../assets/images/avdb-logo-sand.png';
import './Navigation.css';

export default function Navigation({ showLogo = true, lightNav = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  	const onKeyDown = handleKeyDown;
  	window.addEventListener('keydown', onKeyDown);
  	return function cleanup() {
  	  window.removeEventListener('keydown', onKeyDown);
  	}
  }, [isOpen]);

  function handleKeyDown(e) {
    const event = e || window.event;
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }

  const navTabs = [
    { route: routes.home, label: 'home' },
    { route: routes.about, label: 'about' },
    { route: routes.team, label: 'team' },
    { route: routes.portfolio, label: 'portfolio' },
    { route: routes.contact, label: 'contact' },
  ];
  return (
    <div className={classNames('flex', {
    	'justify-between': showLogo,
    	'justify-end': !showLogo,
    	'text-primary': !lightNav,
    	'text-secondary': lightNav,
    })}>
      <div
        className={classNames('mobile-nav bg-red w-full flex flex-col justify-end pt-10 pl-14', {
          closed: !isOpen,
        })}
      >
	    <div className="close-button-container flex justify-between">
	      <img className="nav-logo" src={appLogoCream} alt="AVDB Consulting" />
          <button type="button" className="close-button mr-8" tabIndex="0" onClick={() => setIsOpen(false)}>
            <div className="close-left" />
            <div className="close-right" />
          </button>
        </div>
        <div className="mobile-menu h-full pr-16 text-secondary">
          <nav className="flex flex-col h-full mx-5 text-4xl text-right">
            {navTabs.map((nav) => (
              <Link className="my-6" to={nav.route}>{nav.label}</Link>
        	))}
          </nav>
        </div>
      </div>
	  {showLogo && (
	  	<Link to={routes.home}>
	  	  <img className="nav-logo mt-8 ml-14" src={!lightNav ? appLogoSand : appLogoCream} alt="AVDB Consulting" />
	  	</Link>
	  )}
      <div className="button-container flex items-center mt-10 mr-10 p-0">
      	<a className="linkedin-icon mr-4 text-3xl" href="https://www.linkedin.com/in/alisonvdb/" target="_blank" rel="noreferrer noopener">
      	  <i class="fab fa-linkedin"></i>
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
