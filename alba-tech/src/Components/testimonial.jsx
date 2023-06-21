import React from "react";

const Testimonial = () => {
  return (
    <>
      <div
        className="flex h-screen my-8"
        style={{ backgroundImage: "url(/assets/BG-Testi.svg)" }}
        id="testimonials"
      >
        <div className="container mx-auto">
          <div className="flex flex-col text-center mb-8 md:w-2/3 lg:w-1/2 mx-auto">
            <p className="text-[#C4C4C4] text-md">Testimonials</p>
            <p className="text-4xl font-extrabold">
              What clients love in working with Albatech Team
            </p>
          </div>
          <div className="flex flex-col mx-auto container px-4 w-full md:w-2/3 lg:w-1/2 h-1/3">
            <div className="flex h-full w-full mx-auto justify-between items-center">
              <div className="m-8 p-6 w-3/4 md:w-2/5 gap-2 flex flex-col">
                <p className="text-3xl font-bold">Amazing people</p>
                <p className="text-xl">
                  "They are people who are not are not following the task, but
                  can work as a team. Together."
                </p>
                <div className="flex gap-4">
                  <div className="bg-slate-400 rounded-full w-12 h-12"></div>
                  <div>
                    <p>Matthijs Piest</p>
                    <p>COO at WieBetaaltWat</p>
                  </div>
                </div>
              </div>
              <div className="m-8 p-6 w-3/4 md:w-2/5 gap-2 flex flex-col">
                <p className="text-xl font-bold">Amazing people</p>
                <p className="text-sm">
                  "They are people who are not are not following the task, but
                  can work as a team. Together."
                </p>
                <div className="flex gap-4 items-center">
                  <div className="bg-slate-400 rounded-full w-5 h-5"></div>
                  <div className="text-xs">
                    <p>Matthijs Piest</p>
                    <p>COO at WieBetaaltWat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-full mx-auto justify-between items-center">
              <div className="m-8 p-6 w-3/4 md:w-2/5 gap-2 flex flex-col">
                <p className="text-xl font-bold">Amazing people</p>
                <p className="text-sm">
                  "They are people who are not are not following the task, but
                  can work as a team. Together."
                </p>
                <div className="flex gap-4 items-center">
                  <div className="bg-slate-400 rounded-full w-5 h-5"></div>
                  <div className="text-xs">
                    <p>Matthijs Piest</p>
                    <p>COO at WieBetaaltWat</p>
                  </div>
                </div>
              </div>
              <div className="m-8 p-6 w-3/4 md:w-2/5 gap-2 flex flex-col">
                <p className="text-3xl font-bold">Amazing people</p>
                <p className="text-xl">
                  "They are people who are not are not following the task, but
                  can work as a team. Together."
                </p>
                <div className="flex gap-4">
                  <div className="bg-slate-400 rounded-full w-12 h-12"></div>
                  <div>
                    <p>Matthijs Piest</p>
                    <p>COO at WieBetaaltWat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 w-3/4 md:w-2/5 gap-2 flex flex-col ml-8 md:ml-[15%]">
              <p className="text-xl font-bold">Amazing people</p>
              <p className="text-sm">
                "They are people who are not are not following the task, but can
                work as a team. Together."
              </p>
              <div className="flex gap-4 items-center">
                <div className="bg-slate-400 rounded-full w-5 h-5"></div>
                <div className="text-xs">
                  <p>Matthijs Piest</p>
                  <p>COO at WieBetaaltWat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
