import Image from "next/image";
import Group56 from "../../ImgAssets/Group56.png";

function Header() {
  return (
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
    </div>
  );
}

export default Header;
