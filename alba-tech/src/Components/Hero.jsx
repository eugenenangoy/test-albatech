import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" top-0 py-[11rem] custom-bg" id="hero">
        <div className="flex flex-wrap mx-auto  ">
          <div className="flex flex-col lg:w-1/2 w-full">
            <div className="flex flex-col justify-center w-2/3 h-full ml-auto">
              <h1 className="xl:text-6xl text-4xl mb-6 font-bold">
                Build or scale up
              </h1>
              <h1 className="lg:text-5xl text-3xl font-semibold">
                your development team
              </h1>
              <div className="flex mb-10 mt-[42px]">
                <hr className="w-[75px] bg-yellow-400 h-[5px] rounded-full mt-3" />
                <p className="mx-4 text-xl">in weeks, not months</p>
              </div>
              <button
                type="button"
                className="w-48 text-black px-2.5 py-5 bg-yellow-400 rounded-full font-bold hover:bg-yellow-500 transition duration-500 ease-in-out sm:mb-8"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="flex xl:w-1/2 lg:w-1/2 w-full ml-auto">
            <img
              src="/assets/Group-81.svg"
              alt="Images"
              style={{ width: "800px" }}
              className="flex ml-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
