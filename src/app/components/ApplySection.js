import Image from "next/image";
import React from "react";

function ApplySection() {
  return (
    <div className="relative w-[80%] m-auto p-5 font-sans top-[-20rem]">
      <main>
        {/* Header Section */}
        <div className="flex justify-between items-start mb-10 md:flex-row flex-col">
          <div className="md:w-[45%] flex justify-center md:order-2">
            <Image
              src="/image.png"
              alt="Illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="md:w-[50%] md:pt-20">
            <h1 className="text-4xl font-bold text-gray-800">
              How to <span className="text-red-500">apply?</span>
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              It’s a process, and for good reason. When you apply for a position
              at <span className="font-bold">Boubyan digital factory,</span> we
              want to make sure it’s the right fit – for both of us! Generally,
              here’s what to expect:
            </p>
            <button className="mt-5 px-6 py-2 font-bold border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition duration-300">
              Check available opportunity
            </button>
          </div>
        </div>

        {/* Steps div */}
        <div className="relative flex justify-center mt-10 space-x-8 mt-[-5rem]">
          {/* Left Column */}
          <div className="w-[40%] space-y-20 relative top-0 hidden md:block">
            <div className="bg-white p-5 rounded-md shadow-md relative -top-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  1
                </span>
                <h2 className="text-xl font-bold">Create a profile</h2>
              </div>
              <p className="text-gray-600">
                We’re scientists, artists, communicators, technologists, and
                human-centered problem solvers focused on designing things all
                people will love.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md relative -top-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  3
                </span>
                <h2 className="text-xl font-bold">Assessment</h2>
              </div>
              <p className="text-gray-600">
                We spend our days focused on driving acquisition, growth, and
                sales through our digital channels — all with a focus on data.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md relative -top-6">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  5
                </span>
                <h2 className="text-xl font-bold">Pre-Employment Screening</h2>
              </div>
              <p className="text-gray-600">
                We work to identify real-life problems and solve them with
                technology to change the way our customers bank, one release at
                a time.
              </p>
            </div>
          </div>

          {/* Middle Line Section */}
          <div
            className="relative flex flex-col items-center mx-8 hidden md:flex"
            style={{ width: "50px" }}
          >
            {/* Line Image */}
            <Image
              src="/Path9Copy.png"
              alt="Vertical Line"
              width={1.7}
              height={50}
              className="absolute max-w-none md:mt-[-5rem]"
            />

            {/* Dot Images positioned along the line */}
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="relative"
                style={{ top: `${index * 90}px` }}
              >
                <Image
                  src="/Group-24.png"
                  alt="Dot"
                  width={20}
                  height={20}
                  className="absolute left-1/2 transform -translate-x-1/2 max-w-none my-20"
                />
              </div>
            ))}

            {/* Final Check Mark Image at the Bottom */}
            <div className="absolute bottom-[-100px]">
              <Image
                src="/Group-34.png"
                alt="Final Check Mark"
                width={50}
                height={50}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[45%] space-y-20 relative top-20 hidden md:block">
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  2
                </span>
                <h2 className="text-xl font-bold">Preliminary Interview</h2>
              </div>
              <p className="text-gray-600">
                We believe in the power of data over intuition, and we lead the
                charge in embedding this data-driven approach into everything
                our teams build.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  4
                </span>
                <h2 className="text-xl font-bold">In-Person Interview</h2>
              </div>
              <p className="text-gray-600">
                We take ownership of business objectives and translate them into
                digital priorities, building experiences that empower our
                clients.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  6
                </span>
                <h2 className="text-xl font-bold">Reference Check</h2>
              </div>
              <p className="text-gray-600">
                The Platform Organization builds modern technology platforms
                that enable our teams to excel.
              </p>
            </div>
          </div>
          {/* Mobile section */}
          <div className="flex flex-col gap-4 mt-40 md:hidden">
            <div className="bg-white p-5 rounded-md shadow-md relative">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  1
                </span>
                <h2 className="text-xl font-bold">Create a profile</h2>
              </div>
              <p className="text-gray-600">
                We’re scientists, artists, communicators, technologists, and
                human-centered problem solvers focused on designing things all
                people will love.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  2
                </span>
                <h2 className="text-xl font-bold">Preliminary Interview</h2>
              </div>
              <p className="text-gray-600">
                We believe in the power of data over intuition, and we lead the
                charge in embedding this data-driven approach into everything
                our teams build.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md relative">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  3
                </span>
                <h2 className="text-xl font-bold">Assessment</h2>
              </div>
              <p className="text-gray-600">
                We spend our days focused on driving acquisition, growth, and
                sales through our digital channels — all with a focus on data.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  4
                </span>
                <h2 className="text-xl font-bold">In-Person Interview</h2>
              </div>
              <p className="text-gray-600">
                We take ownership of business objectives and translate them into
                digital priorities, building experiences that empower our
                clients.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md relative">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  5
                </span>
                <h2 className="text-xl font-bold">Pre-Employment Screening</h2>
              </div>
              <p className="text-gray-600">
                We work to identify real-life problems and solve them with
                technology to change the way our customers bank, one release at
                a time.
              </p>
            </div>
            <div className="bg-white p-5 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-gray-400 mr-0">0</span>
                <span className="text-2xl font-bold text-black-400 mr-2">
                  6
                </span>
                <h2 className="text-xl font-bold">Reference Check</h2>
              </div>
              <p className="text-gray-600">
                The Platform Organization builds modern technology platforms
                that enable our teams to excel.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ApplySection;
