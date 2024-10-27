import React from "react";
import Image from "next/image";
import Path9 from "../ImgAssets/Path9.png";
import Group36 from "../ImgAssets/Group36.png";
import Group44 from "../ImgAssets/Group44.png";

function Opportunities() {
  return (
    <div>
      <Image
        src={Path9}
        alt="Picture of Path9"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "10%", height: "auto" }}
      />
      <span
        className="font-bold ml-40 text-4xl text-[#54585A]"
        style={{ width: "376px", height: "48px" }}
      >
        Available opportunities
      </span>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Image
        src={Group44}
        alt="Picture of Group44"
        width={0}
        height={0}
        // sizes="100vw"
        className="ml-40"
        style={{ width: "50%", height: "auto" }}
      />
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-row gap-10 gap-x-20 justify-center relative">
        <div className="flex flex-col gap-10">
          <div
            className=" border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024]"
            style={{ width: "520px", height: "174px" }}
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
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024]"
            style={{ width: "520px", height: "174px" }}
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
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024]"
            style={{ width: "520px", height: "174px" }}
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
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024]"
            style={{ width: "520px", height: "174px" }}
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
            className="flex flex-col border-2 border-gray-200 rounded-xl p-6 shadow-[20px_5px_25px_2px_#00000024]"
            style={{ width: "520px", height: "174px" }}
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
            className="absolute right-0"
            style={{ width: "411px", height: "569px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
