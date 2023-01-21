import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import {ArrowCircleLeft, ArrowCircleRight} from "@heroicons/react/outline"
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/solid";



function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={'cursor-pointer bottom-1/2 absolute flex items-center justify-center  right-8 z-10   rounded-full'}
      style={{ ...style, display: "block", background: ""}}
      onClick={onClick}
      // className="cursor-pointer bottom-1/2 absolute flex items-center justify-center  right-8 z-10   rounded-full"
    >
      <ArrowCircleRightIcon className="h-8 w-8 text-green-300 z-100 mx-0" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={"absolute bottom-1/2 cursor-pointer flex items-center justify-center  left-8 z-10 rounded-full"}
      style={{ ...style, display: "block", background: "",}}
      onClick={onClick}
      // className="absolute bottom-1/2 cursor-pointer flex items-center justify-center  left-8 z-10 rounded-full"
    >
      <ArrowCircleLeftIcon className="h-8 w-8 text-green-300 mx-0 z-100" />
    </div>
  );
}

function MyBanner({ banner }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-gray-100 shadow-lg mt-4 max-w-4xl mx-auto">
      <Slider {...settings} className="z-10 relative">
        {banner.map((b) => (
          <div key={b.id}>
            <div
              className="flex h-64 sm:h-screen justify-center bg-contain bg-center bg-no-repeat "
              style={{
                // backgroundImage: `url(${`/images01/${b.image}.jpeg`})`,
                backgroundImage: `url(${b.images.url})`,
              }}
            >
              {/* <div className="  flex items-center justify-center bg-gradient-to-t from gray-900 to transparent top-0 left-0">
                <div className="px-2 rounded z-22 absolute text-gray-50 text-center bottom-2 left-2 bg-gray-900  bg-opacity-50 ">
                  <p className="font-bold">{b.title}</p>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MyBanner;
