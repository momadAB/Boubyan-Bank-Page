import React from "react";

function Part3() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 relative top-[-25rem]">
      <div className="md:w-3/4 bg-white rounded-md shadow-[0px_20px_20px_10px_#00000024] p-8">
        <h1 className="text-center font-bold text-4xl my-8">
          Different areas of expertise, one powerful team
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-2">Design</h2>
              <p>
                We’re scientists, artists, communicators, and human-centered
                problem solvers focused on designing things all people will
                love.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Product Ownership</h2>
              <p>
                Product ownership We spend our days focused on driving
                acquisition, growth, and sales through our digital channels —
                all with a focus on data-driven optimization and
                personalization.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">AI & Machine learning</h2>
              <p>
                AI & Machine learning We work to identify real-life problems and
                solve them with technology to change the way our customers bank,
                one release at a time.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-2">Software developments</h2>
              <p>
                We believe in the power of data over intuition, and we lead the
                charge in embedding this data-driven approach into everything
                our teams build.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Data and analytics</h2>
              <p>
                We take ownership of business objectives and translate them into
                digital priorities, building excellence in the global digital
                customer experience.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2">Manegement</h2>
              <p>
                Management The Platform Organization builds modern technology
                platforms that enable our teams to develop applications quickly,
                securely, and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Part3;
