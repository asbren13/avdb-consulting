import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import './Contact.css';

const Contact = () => (
  <div className="contact h-full w-full">
    <div className="contact-content flex flex-col h-full w-full pb-4 lg:pb-10">
      <Navigation showLogo />
      <div className="contact-text flex flex-col h-full w-2/3 my-10 lg:my-20 mx-auto items-center justify-center leading-normal text-center">
        <div className="text-3xl lg:text-6xl text-red lg:mt-3">Let&apos;s get in touch.</div>
        <div className="my-3 lg:my-10 text-base lg:text-3xl text-primary">
          Interested in marketing or business development support,  or just chatting with a like-minded wine + hospitality professional?
        </div>
        <a
          className="button rounded-full mt-1 lg:mt-4 mb-2 lg:mb-6 font-secondary bg-red text-secondary"
          target="_blank"
          rel="noreferrer"
          href="mailto:alisongvdb@gmail.com?subject=Let's get in touch"
        >
          drop us a line
        </a>
      </div>
      <Footer showExpanded />
    </div>
  </div>
);

export default Contact;
