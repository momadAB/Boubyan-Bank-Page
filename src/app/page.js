import Image from "next/image";
import Group56 from "../ImgAssets/Group56.png";
import Group19img from "../ImgAssets/4401279.png";
import Group8 from "../ImgAssets/Group8.png";
import Group19 from "../ImgAssets/Group19.png";
import Group13 from "../ImgAssets/Group13.png";
import Path2 from "../ImgAssets/Path2.png";
import Path8 from "../ImgAssets/Path8.png";
import Group37 from "../ImgAssets/Group37.png";

export default function Home() {
  return (
    <div className="flex-col justify-items-center mt-10">
      <div className="relative w-full flex justify-center items-center">
        <div className="text-left max-w-96 z-10">
          <h1 className="font-bold text-3xl">
            Digital Factory Now <br />
            at Cairo!
          </h1>
          <p className="mt-3 text-lg">
            Boubyan Digital Factory offers a great potential for growth and
            development in a unique environment driven by a strong culture of
            digital innovation.
          </p>
          <a
            href="#"
            className="inline-block mt-10 p-5 bg-red-600 font-bold text-lg text-center rounded-md hover:bg-red-400"
          >
            Join us today
          </a>
        </div>
        <Image
          src={Group56}
          alt="Picture of Group56"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="absolute mt-48 mb-48"
        />
        {/* <Image
          src={Group8}
          alt="Picture of Group8"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "40%", height: "auto" }}
          className="absolute top-18 left-40"
        /> */}
      </div>
      <div className="relative w-full flex flex-col items-center justify-center min-h-screen mx-auto px-10 pt-8">
        <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center mx-auto px-24">
          <Image
            src={Group19img}
            alt="Picture of Group19"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "35%", height: "auto" }}
            className="ml-8 mr-8 shrink-0"
          />
          <div className="lg:ml-8 mt-4 lg:mt-0">
            <h1 className="font-bold mb-3 text-3xl">
              We create <span className="text-red-600">solutions</span> for a
              digital world
            </h1>
            <p>
              Boubyan Group is a leading renowned financial institution that
              provides reliable and sound products and solutions with the
              promise of stable growth, secure and sustainable results.
            </p>
            <div className="my-5" />
            <p>
              Translating our strong belief in the core role of technology in
              the progress and advancement of all our activities, the Group has
              founded Boubyan Digital Factory to support and strengthen the
              culture of innovation in a digitally driven environment that
              builds on the achieved successes to prepare for future milestones.
            </p>
          </div>
        </div>
        <div className="my-5" />
        <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center mx-auto px-24">
          <div className="lg:ml-8 mt-4 lg:mt-0">
            <h1 className="font-bold mb-3 text-3xl">
              We <span className="text-red-600">innovate</span> today for the
              future
            </h1>
            <p>
              Boubyan Group is a leading renowned financial institution that
              provides reliable and sound products and solutions with the
              promise of stable growth, secure and sustainable results.
            </p>
            <div className="my-5" />
            <p>
              Translating our strong belief in the core role of technology in
              the progress and advancement of all our activities, the Group has
              founded Boubyan Digital Factory to support and strengthen the
              culture of innovation in a digitally driven environment that
              builds on the achieved successes to prepare for future milestones.
            </p>
          </div>
          <Image
            src={Group13}
            alt="Picture of Group13"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "35%", height: "auto" }}
            className="ml-8 mr-8 shrink-0"
          />
        </div>
        <div className="my-24" />
        <Image
          src={Path2}
          alt="Picture of Path2"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "10%", height: "auto" }}
          className="absolute left-0"
        />
        <div>
          <Image
            src={Path8}
            alt="Picture of Path8"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "10%", height: "auto" }}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-3/4 bg-white rounded-md shadow-[0px_20px_20px_10px_#00000024] p-8">
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
                <h2 className="text-lg font-bold mb-2">
                  AI & Machine learning
                </h2>
                <p>
                  AI & Machine learning We work to identify real-life problems
                  and solve them with technology to change the way our customers
                  bank, one release at a time.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h2 className="text-lg font-bold mb-2">
                  Software developments
                </h2>
                <p>
                  We believe in the power of data over intuition, and we lead
                  the charge in embedding this data-driven approach into
                  everything our teams build.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">Data and analytics</h2>
                <p>
                  We take ownership of business objectives and translate them
                  into digital priorities, building excellence in the global
                  digital customer experience.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">Manegement</h2>
                <p>
                  Management The Platform Organization builds modern technology
                  platforms that enable our teams to develop applications
                  quickly, securely, and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Image
        src={Group37}
        alt="Picture of Group37"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      /> */}
    </div>
  );
}
