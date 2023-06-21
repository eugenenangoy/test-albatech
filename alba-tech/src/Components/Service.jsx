import React from "react";

const Service = () => {
  const cardType = [
    {
      name: "Website Development",
      desc: "High-performance website to reach out more your potential customers",
      url: "/assets/group-6.svg",
    },
    {
      name: "Mobile Apps Development",
      desc: "To accelerate your business process",
      url: "/assets/Mobile-apps-development.svg",
    },
    {
      name: "Digital Product Design",
      desc: "Complete digital product creations from UX prototyping to final UI designs",
      url: "/assets/Digital-product-design.svg",
    },
    {
      name: "Maintenance",
      desc: "Make sure your digital environtment keep online and updated",
      url: "/assets/Maintenance.svg",
    },
    {
      name: "CMS Development",
      desc: "You can update your website content yourself",
      url: "/assets/CMS-development.svg",
    },
    {
      name: "Integrated Payment Gateway",
      desc: "Simplify the payment system with just one step",
      url: "/assets/Payment.svg",
    },
  ];
  const logo = [
    {
      url: "/assets/color-logo-assets/Amazon_Web_Services_Logo.svg",
    },
    {
      url: "/assets/color-logo-assets/google_cloud-icon.svg",
    },
    {
      url: "/assets/color-logo-assets/angular-seeklogo.com.svg",
    },
    {
      url: "/assets/color-logo-assets/CSS3_logo_and_wordmark.svg",
    },
    {
      url: "/assets/color-logo-assets/HTML5_logo_and_wordmark.svg",
    },
    {
      url: "/assets/color-logo-assets/node-js.svg",
    },
    {
      url: "/assets/color-logo-assets/PHP-logo.svg",
    },
    {
      url: "/assets/color-logo-assets/Python-logo-notext.svg",
    },
    {
      url: "/assets/color-logo-assets/logo192.png",
    },
    {
      url: "/assets/color-logo-assets/Ruby_logo.svg",
    },
    {
      url: "/assets/color-logo-assets/mongodb_plain_logo_icon_146422.svg",
    },
    {
      url: "/assets/color-logo-assets/mysql-official.svg",
    },
    {
      url: "/assets/color-logo-assets/postgresql-horizontal.svg",
    },
    {
      url: "/assets/color-logo-assets/microsoft-sql-server-logo-svgrepo-com.svg",
    },
  ];
  return (
    <>
      <div className="custom-bg flex justify-center flex-col gap-8 mx-auto w-full mb-12" id="service">
        <div className="flex flex-col text-center container mx-auto">
          <p className="text-[#C4C4C4] text-md">Complete Package</p>
          <p className="text-4xl font-extrabold">
            From Product Design To Software Continous Delivery
          </p>
        </div>
        <div className="lg:container mx-auto flex flex-wrap justify-center gap-14">
          {cardType.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 lg:w-1/4 sm:w-1/2 h-[183px] p-[24px] border-2 rounded-lg border-[#C4C4C4] hover:border-[#FFCE07] hover:cursor-pointer"
            >
              <img
                src={item.url}
                alt={index}
                style={{ width: "56px", height: "56px" }}
                className="mb-4"
              />
              <p className="font-bold text-[#FFCE07]">{item.name}</p>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap w-full px-[8%] mb-12">
        {logo.map((item, index) => (
          <div className="flex w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-8 ">
            <img
              key={index}
              src={item.url}
              alt={index.toString()}
              style={{ width: "85px", height: "85px" }}
              className="object-contain grayscale hover:grayscale-0 opacity-90 transition duration-400"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full sm:h-1/3 lg:h-[271px] bg-[#272727] mb-24">
       <div className="container flex mx-auto flex-col justify-center items-center">
       <div className="flex flex-col my-8 justify-center w-1/2">
          <p className="text-[#FFCE07] text-3xl font-bold text-center">
            Our Progress Comes with a Collaboration Between Creativity, Ideas,
            and Technology
          </p>
        </div>
        <div className="flex w-[75%] justify-between my-4 text-white text-center ">
          <div className="flex flex-col justify-center p-2 ">
            <p className="text-4xl font-semibold">1000+</p>
            <p className="text-md">Designs</p>
          </div>
          <div className="flex flex-col justify-center p-2 ">
            <p className="text-4xl font-semibold">30+</p>
            <p className="text-md">Products</p>
          </div>
          <div className="flex flex-col justify-center p-2 ">
            <p className="text-4xl font-semibold">58+</p>
            <p className="text-md">Website Development</p>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Service;
