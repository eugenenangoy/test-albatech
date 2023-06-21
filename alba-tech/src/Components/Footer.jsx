import React from "react";

const Footers = () => {
  return (
    <>
      <div className="container mx-auto px-32" id="about">
        <div className="flex justify-center w-full border-t border-[#C4C4C4] py-14">
          <div className="flex flex-col w-1/3 gap-6">
            <img
              src="/assets/alba-logo.svg"
              alt="images"
              style={{ width: "125px" }}
            />
            <p className="text-lg">
              Albatech acts as a corporate partner to help digititze their
              business to accelerate trends in remote work
            </p>
            <div className="flex justify-between w-1/4  ">
              <img
                src="/assets/Fb.svg"
                alt="images"
                style={{ width: "22px", height: "22px" }}
              />
              <img
                src="/assets/Ig.svg"
                alt="images"
                style={{ width: "22px", height: "22px" }}
              />
              <img
                src="/assets/Linked.svg"
                alt="images"
                style={{ width: "22px", height: "22px" }}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/3 mx-12 gap-y-4">
            <p className="text-2xl font-bold">Website</p>
            <p>About</p>
            <p>Service</p>
            <p>Portofolio</p>
            <p>Blog</p>
            <p>Career</p>
          </div>
          <div className="flex flex-col w-1/3 gap-4">
            <p className="text-2xl font-bold">Contact</p>
            <div>
              <p>The Prominence Blok 38D No.25</p>
              <p>Jl. Jalur Sutera Barat, Alam Sutera,</p>
              <p>Kota tangerang, Banten 15143</p>
            </div>
            <p className="flex gap-2">
              <span className="inline-block font-bold">P :</span>
              <span className="inline-block font-normal">+62 81 1889 3383</span>
            </p>
            <p className="flex gap-2">
              <span className="inline-block font-bold">E :</span>
              <span className="inline-block font-normal">info@albatech.id</span>
            </p>
          </div>
          <div className="flex mt-auto mb-4 mr-4 z-100">
            <img
              src={"assets/WhatsApp-Button.svg"}
              alt="WA-Button"
              style={{ width: "64px", height: "64px" }}
            />
          </div>
        </div>
        <div class="w-full py-6 flex mx-auto border-t border-[#C4C4C4] justify-between">
          <p class="font-medium text-sm text-[#C4C4C4]">
            &copy; PT. Alba Digital Teknologi 2021 | All Right Reserved
          </p>
          <p class="font-medium text-sm text-[#C4C4C4]">
            Privacy Policy | Terms Of Service
          </p>
        </div>
      </div>
    </>
  );
};

export default Footers;
