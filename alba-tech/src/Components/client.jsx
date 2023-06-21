import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };

  const dataIcon = [
    {
      url: "/assets/Hippo.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Home&Living.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Ilios.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Dio.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Melanda.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Hippo.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Home&Living.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Ilios.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Dio.svg",
      alt: "Hippo",
    },
    {
      url: "/assets/Melanda.svg",
      alt: "Hippo",
    },
  ];
  return (
    <>
      <div className="flex flex-col container gap-y-12 mx-auto px-32 py-12">
        <Slider {...settings} className="w-full">
          {dataIcon.map((item, index) => (
            <div className="h-[200px] flex">
              <img src={item.url} alt={index.toString()} className="object-contain" />
            </div>
          ))}
        </Slider>
        <div className="flex w-full py-8 bg-[#FFCE07] items-center justify-center flex-col rounded-xl border-2 border-black">
          <p className="text-xl mt-4">
            Is Software important for your business?
          </p>
          <p className="text-5xl font-semibold my-4">Build it with Albatech</p>
          <button className="w-[188px] h-[57px] my-4 border-2 border-black rounded-full font-bold hover:border-[#FFCE07] hover:bg-black hover:text-[#FFCE07] transition duration-500 ease-in-out">
            Consultation Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Client;
