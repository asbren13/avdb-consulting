import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import './Home.css';

const className =
  'home-text flex w-3/4 md:w-2/3 my-auto mx-auto items-center justify-center text-secondary sm:text-5xl text-xl leading-normal';

const Home = () => (
  <div className="home h-full">
    <div className="overlay-container">
      <div className="overlay h-full w-full" />
      <div className="bg-home bg-cream h-full w-full" />
    </div>
    <div className="home-content flex flex-col h-full w-full">
      <Navigation showLogo lightNav />
      <div className={className}>
        We are a team of marketing and business development strategists who specialize in social impact,
        female and minority-owned wine and hospitality brands.
      </div>
      <Footer lightFooter />
    </div>
  </div>
);

export default Home;
