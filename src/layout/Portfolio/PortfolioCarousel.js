import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PortfolioCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="w-full"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass="panel-section px-2 mr-8 flex flex-col text-secondary"
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <div className="oyster-sunday bg-cover bg-no-repeat h-full">
        <a href="https://www.oystersunday.com/" target="_blank" rel="noreferrer">
          <div className="panel-content h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/2 text-4xl text-center">Oyster Sunday</div>
            <div className="hidden-line w-4/5 my-8" />
            <div className="hidden-text px-12 text-xl font-secondary">
              Insert sentence about the work you did. Insert sentence about the work you did.<br/><br/>
              Insert sentence about the work you did. Insert sentence about the work you did. 
            </div>
          </div>
        </a>
      </div>
      <div className="chufly-imports bg-cover bg-no-repeat h-full">
        <a href="https://chufly.com/" target="_blank" rel="noreferrer">
          <div className="panel-content h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/2 text-4xl text-center">Chufly Imports</div>
            <div className="hidden-line w-4/5 my-8" />
            <div className="hidden-text px-12 text-xl font-secondary">
              Insert sentence about the work you did. Insert sentence about the work you did.<br/><br/>
              Insert sentence about the work you did. Insert sentence about the work you did. 
            </div>
          </div>
        </a>
      </div>
      <div className="kevin-zraly bg-cover bg-no-repeat h-full">
        <a href="https://www.kevinzraly.com/" target="_blank" rel="noreferrer">
          <div className="panel-content h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/2 text-4xl text-center">Kevin Zraly</div>
            <div className="hidden-line w-4/5 my-8" />
            <div className="hidden-text px-12 text-xl font-secondary">
              Insert sentence about the work you did. Insert sentence about the work you did.<br/><br/>
              Insert sentence about the work you did. Insert sentence about the work you did. 
            </div>
          </div>
        </a>
      </div>
      <div className="vin-social bg-cover bg-no-repeat h-full">
        <a href="https://vinsocial.co/" target="_blank" rel="noreferrer">
          <div className="panel-content h-full w-full flex flex-col items-center justify-center">
            <div className="w-1/2 text-4xl text-center">Vin Social</div>
            <div className="hidden-line w-4/5 my-8" />
            <div className="hidden-text px-12 text-xl font-secondary">
              Insert sentence about the work you did. Insert sentence about the work you did.<br/><br/>
              Insert sentence about the work you did. Insert sentence about the work you did. 
            </div>
          </div>
        </a>
      </div>
    </Carousel>
  );
};

export default PortfolioCarousel;
