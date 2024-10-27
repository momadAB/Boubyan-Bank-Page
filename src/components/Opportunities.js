import React from "react";
import Image from "next/image";
import Path9 from "../ImgAssets/Path9.png";
import Group36 from "../ImgAssets/Group36.png";
import Group44 from "../ImgAssets/Group44.png";

function Opportunities() {
  return (
    <div className="mt-[-20rem]">
      <Image
        src={Path9}
        alt="Picture of Path9"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "10%", height: "auto" }}
      />
      <span
        className="font-bold md:ml-40 text-4xl text-[#54585A] text-center"
        style={{ width: "376px", height: "48px" }}
      >
        <p>Available opportunities</p>
      </span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="m-4">
        <Image
          src={Group44}
          alt="Picture of Group44"
          width={0}
          height={0}
          // sizes="100vw"
          className="md:ml-40 md:w-1/2 "
          style={{ height: "auto" }}
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-col md:flex-row gap-10 md:gap-x-20 justify-center relative">
        <div className="flex flex-col gap-10">
          <div
            className=" border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024] bg-white md:w-[520px] md:h-[174px]"
            style={{}}
          >
            <h2 className="font-extrabold text-3xl text-gray-600">
              Lead UX UI design item
            </h2>
            <p>12 Jan 2021 | Cairo</p>
            <br></br>
            <br></br>
            <div className="flex justify-between">
              <p>Full Time, on Site</p>
              <button className="text-red-500 justify-items-end font-bold">
                Apply Now
              </button>
            </div>
          </div>
          <div
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024] bg-white  md:w-[520px] md:h-[174px]"
            style={{}}
          >
            <h2 className="font-extrabold text-3xl text-gray-600">
              UX Content Writer
            </h2>
            <p>12 Jan 2021 | Cairo</p>
            <br></br>
            <br></br>
            <div className="flex justify-between">
              <p>Full Time, on Site</p>
              <button className="text-red-500 justify-items-end font-bold">
                Apply Now
              </button>
            </div>
          </div>
          <div
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024] bg-white  md:w-[520px] md:h-[174px]"
            style={{}}
          >
            <h2 className="font-extrabold text-3xl text-gray-600">
              UX UI Designer
            </h2>
            <p>12 Jan 2021 | Cairo</p>
            <br></br>
            <br></br>
            <div className="flex justify-between">
              <p>Full Time, on Site</p>
              <button className="text-red-500 justify-items-end font-bold">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 z-10">
          <div
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024] bg-white  md:w-[520px] md:h-[174px]"
            style={{}}
          >
            <h2 className="font-extrabold text-3xl text-gray-600">
              Senior UX UI Designer
            </h2>
            <p>12 Jan 2021 | Cairo</p>
            <br></br>
            <br></br>
            <div className="flex justify-between">
              <p>Full Time, on Site</p>
              <button className="text-red-500 justify-items-end font-bold">
                Apply Now
              </button>
            </div>
          </div>
          <div
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024] bg-white  md:w-[520px] md:h-[174px]"
            style={{}}
          >
            <h2 className="font-extrabold text-3xl text-gray-600">
              UX Researcher
            </h2>
            <p>12 Jan 2021 | Cairo</p>
            <br></br>
            <br></br>
            <div className="flex justify-between">
              <p>Full Time, on Site</p>
              <button className="text-red-500 justify-items-end font-bold">
                Apply Now
              </button>
            </div>
          </div>
          <Image
            src={Group36}
            alt="Picture of Group36"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-0 -z-10 hidden md:block"
            style={{ width: "411px", height: "569px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
