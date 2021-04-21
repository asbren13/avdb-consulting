import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import alisonImg from '../../assets/images/Alison.svg';
import alyssaImg from '../../assets/images/Alyssa.svg';
import './Team.css';

const Team = () => (
  <div className="team flex flex-col h-full bg-cream">
    <Navigation showLogo />
    <div className="flex flex-col w-11/12 lg:w-4/5 xl:w-4/6 mt-8 ml-4 mb-8 md:ml-10 lg:ml-16 xl:mt-16 xl:ml-56 xl:mb-10 text-content text-red">
      <div className="text-2xl md:text-5xl leading-normal">
        Our team is full of passionate individuals who are inspired by telling stories in the wine & hospitality industry.
      </div>
    </div>
    <div className="team-content flex flex-col flex-grow h-full w-full bg-cream">
      <div className="content-section flex flex-col h-full items-center w-full my-4 lg:my-14 text-red">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8">
          <img className="team-img w-3/4 lg:w-1/2 mb-4 ml-0 lg:ml-20" src={alisonImg} alt="Alison Van de Berghe" />
          <div className="flex flex-col w-full ml-8 md:w-3/4 lg:w-1/2 md:ml-0">
            <div className="text-2xl lg:text-4xl text-left mb-3 lg:mb-9">Alison Van de Berghe</div>
            <div className="flex items-center w-full mb-3 lg:mb-9">
              <div className="font-secondary mr-2 text-sm lg:text-2xl">founder</div>
              <div className="horizontal-line w-full" />
            </div>
            <div className="h-full w-11/12 lg:w-4/5 mr-0 lg:mr-20 text-sm lg:text-lg text-left font-secondary text-primary">
              <div>
                Originally from the east coast, Alison graduated from The George Washington University in Washington, D.C.
                and moved to the west coast to begin her career in marketing and business development.
              </div>
              <div className="py-0 lg:py-4">
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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full my-0 md:my-10 lg:my-20">
          <div className="flex flex-col w-full mr-8 md:w-3/4 lg:w-1/2 md:mr-16 items-end">
            <div className="text-2xl lg:text-4xl text-right mb-4 lg:mb-9">Alyssa Braeden</div>
            <div className="flex items-center w-full mb-3 lg:mb-9">
              <div className="horizontal-line w-full" />
              <div className="font-secondary ml-2 text-sm lg:text-2xl whitespace-nowrap">public relations consultant</div>
            </div>
            <div className="h-full items-end w-11/12 lg:w-4/5 ml-0 lg:ml-20 text-sm lg:text-lg text-right font-secondary text-primary">
              <div>
                A Texas native and an avid food and travel lover, Alyssa has propelled lifestyle and hospitality clients and
                causes throughout her 8+ year public relations career.
              </div>
              <div className="py-1 lg:py-4">
                Currently based in New Orleans and Houston, her background includes award-winning work with
                renowned celebrity chef Emeril Lagasse among other acclaimed culinary talents, national lifestyle and spirits brands
                as well as events and festivals from Nola to Napa.
              </div>
              <div>
                One part communications specialist, one part strategist and one part storyteller, Alyssa is passionate about championing people
                and brands that inspire her and sharing their narratives in impactful, meaningful ways.
              </div>
            </div>
          </div>
          <img className="team-img w-3/4 lg:w-1/2 mb-4 mr-0 lg:mr-20" src={alyssaImg} alt="Alyssa Braeden" />
        </div>
      </div>
    </div>
    <Footer redFooter showExpanded />
  </div>
);

export default Team;
