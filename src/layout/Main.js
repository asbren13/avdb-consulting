import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import '../assets/css/main.css';

const Main = () => (
  <div className="main h-full">
    <div className="overlay-container">
      <div className="overlay h-full w-full" />
      <div className="bg-home h-full w-full" />
    </div>
    <div className="main-content flex flex-col h-full w-full pb-10">
      <Navigation showLogo lightNav />
      <div className="main-text flex w-2/3 my-auto mx-auto items-center justify-center text-secondary text-5xl font-bold leading-normal">
        We are a team of marketing and business development strategists who specialize in social impact, female and minority-owned wine and hospitality brands.
      </div>
      <Footer lightFooter />
    </div>
  </div>
);

export default Main;
