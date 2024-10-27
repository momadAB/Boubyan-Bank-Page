import Image from "next/image";
import Group19img from "../../ImgAssets/4401279.png";
import Group13 from "../../ImgAssets/Group13.png";
import Path2 from "../../ImgAssets/Path2.png";
import Path8 from "../../ImgAssets/Path8.png";

function Part1() {
  return (
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
            provides reliable and sound products and solutions with the promise
            of stable growth, secure and sustainable results.
          </p>
          <div className="my-5" />
          <p>
            Translating our strong belief in the core role of technology in the
            progress and advancement of all our activities, the Group has
            founded Boubyan Digital Factory to support and strengthen the
            culture of innovation in a digitally driven environment that builds
            on the achieved successes to prepare for future milestones.
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
            provides reliable and sound products and solutions with the promise
            of stable growth, secure and sustainable results.
          </p>
          <div className="my-5" />
          <p>
            Translating our strong belief in the core role of technology in the
            progress and advancement of all our activities, the Group has
            founded Boubyan Digital Factory to support and strengthen the
            culture of innovation in a digitally driven environment that builds
            on the achieved successes to prepare for future milestones.
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
  );
}

export default Part1;
