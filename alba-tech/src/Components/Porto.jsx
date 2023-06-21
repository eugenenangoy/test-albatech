import React from "react";

const Porto = () => {
  const card = [
    {
      type: "Mobile Apps",
      name: "ILIOS app (B2B E-Commerce)",
      desc: "Has a unique selling point where not all companies offer applications for sales, data collection and management",
      url: "assets/porto.svg",
    },
    {
      type: "Website Development",
      name: "Home And Living",
      desc: "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living",
      url: "assets/porto.svg",
    },
    {
      type: "Website Development",
      name: "HIPPO",
      desc: `Albatech help to create e-commerce and company profile for Hippo's Website with realtime transaction and integration with Payment Gateway to accept multi payment`,
      url: "assets/porto.svg",
    },
  ];
  return (
    <>
      <div className="container mx-auto" id="porto">
        <p className="text-gray-400 text-center">Portofolio</p>
        <div className="flex w-full h-auto justify-center gap-8 mb-8">
          <div className="flex flex-col justify-center w-2/4">
            <p className="text-4xl font-extrabold text-center">
              The Software that we build takes our client to the next level
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-wrap justify-center lg:justify-between gap-8">
            {card.map((item, index) => (
              <div
                key={index}
                className="flex flex-col container w-[345px] pb-6 rounded-xl border border-[#C4C4C4] hover:border-yellow-500 hover:cursor-pointer"
              >
                <img src={item.url} alt="images" style={{ width: "345px" }} />
                <div className="p-4 gap-1 flex flex-col">
                  <p className="text-[#C4C4C4]">{item.type}</p>
                  <p className="text-xl font-bold text-[#FFCE07]">
                    {item.name}
                  </p>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="w-48 text-black px-2.5 py-5 bg-yellow-400 rounded-full font-bold hover:bg-yellow-500 transition duration-500 ease-in-out my-8"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Porto;
