import classNames from 'classnames';
import appLogoCream from '../assets/images/avdb-logo-cream.png';
import flowerBottle from '../assets/images/FlowerBottle.svg';
import './Footer.css';

export default function Footer({ lightFooter = false, showExpanded = false, redFooter = false, showFlower = false }) {
  return (
    <footer className={classNames('footer-section flex flex-col items-center w-full', { light: lightFooter, sand: !lightFooter })}>
      <div className="flex w-full pl-10 items-center">
        <div className={classNames('footer-text text-xl font-secondary', {'text-primary': !lightFooter, 'text-secondary': lightFooter, 'text-red': redFooter })}>wine · spirits · hospitality</div>
        <div className="footer-line flex flex-grow ml-2" />
      </div>
      {showExpanded && (
      	<div className="flex items-center justify-between bg-red w-full mt-8 px-10 py-12 text-secondary">
      	  <div className="flex items-center">
      	    {showFlower && <img src={flowerBottle} />}
       	    <div className="flex flex-col justify-end h-full w-3/6 pr-10">
              <div className="text-3xl font-bold mb-3">Let's get in touch</div>
              <div className="text-base font-bold">Interested in reimagining your marketing strategy in a post COVID-19 world, or just chatting with a like-minded hospitality professional?</div>
              <a className="button rounded-full mt-5 py-1 px-10 font-secondary bg-cream text-red" target="_blank" rel="noreferrer" href="mailto:alisongvdb@gmail.com?subject=Let's get in touch">drop me a line</a>
            </div>
          </div>
          <div className="flex flex-col font-secondary text-right">
            <img className="footer-logo mb-7" src={appLogoCream} alt="AVDB Consulting"/>
            <div className="text-base pb-3">AVDB Consulting</div>
            <div className="text-base">4500 Broadway</div>
            <div className="text-base">New York, NY 10001</div>
          </div>
      	</div>
  	  )}
    </footer>
  );	
};
