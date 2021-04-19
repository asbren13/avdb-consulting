import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import alisonImg from '../../assets/images/Alison.svg';
import alyssaImg from '../../assets/images/Alyssa.svg';
import './Team.css';

const Team = () => (
  <div className="team flex flex-col flex-grow h-full bg-cream">
    <Navigation showLogo />
    <div className="flex flex-col w-4/6 mt-16 ml-56 mb-10 text-content text-red">
      <div className="text-5xl leading-normal">
        Our team is full of passionate individuals who are inspired by telling stories in the wine & hospitality industry.
      </div>
    </div>
    <div className="team-content flex flex-col flex-grow h-full w-full bg-cream">
      <div className="content-section flex flex-col h-full items-center w-full my-14 text-red">
        <div className="flex items-center justify-between w-full mb-8">
          <img className="team-img w-1/2 ml-20" src={alisonImg} alt="Alison Van de Berghe" />
          <div className="flex flex-col w-1/2">
            <div className="text-4xl text-left mb-9">Alison Van de Berghe</div>
            <div className="flex items-center w-full mb-9">
              <div className="font-secondary mr-2 text-2xl">founder</div>
              <div className="horizontal-line w-full" />
            </div>
            <div className="h-full w-4/5 mr-20 text-lg text-left font-secondary text-primary">
              <div>
                Originally from the east coast, Alison graduated from The George Washington University in Washington, D.C.
                and moved to the west coast to begin her career in marketing and business development.
              </div>
              <div className="py-4">
                Beginning with specializing in sustainability at Ogilvy & Mather and later in food & wine at Wagstaff
                Marketing, she followed her passion for both and moved to Chile in 2019 to run the marketing
                and tourism operation of a sustainable vineyard outside of Santiago.
              </div>
              <div>
                She now consults for brands in the food, wine and hospitality space, and
                enjoys a glass of female-made natural wine in her spare time.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full my-20">
          <div className="flex flex-col w-1/2 items-end">
            <div className="text-4xl text-right mb-9">Alyssa Braeden</div>
            <div className="flex items-center w-full mb-9">
              <div className="horizontal-line w-full" />
              <div className="font-secondary ml-2 text-2xl whitespace-nowrap">public relations consultant</div>
            </div>
            <div className="h-full items-end w-4/5 ml-20 text-lg text-right font-secondary text-primary">
              <div>
                Originally from the east coast, Alison graduated from The George Washington University in Washington, D.C.
                and moved to the west coast to begin her career in marketing and business development.
              </div>
              <div className="py-4">
                Beginning with specializing in sustainability at Ogilvy & Mather and later in food & wine at Wagstaff
                Marketing, she followed her passion for both and moved to Chile in 2019 to run the marketing
                and tourism operation of a sustainable vineyard outside of Santiago.
              </div>
              <div>
                She now consults for brands in the food, wine and hospitality space, and
                enjoys a glass of female-made natural wine in her spare time.
              </div>
            </div>
          </div>
          <img className="team-img w-1/2 mr-20" src={alyssaImg} alt="Alyssa Braeden" />
        </div>
      </div>
      <Footer redFooter showExpanded />
    </div>
  </div>
);

export default Team;
