import Image from "next/image";
import Group56 from "../ImgAssets/Group56.png";
import Group8 from "../ImgAssets/Group8.png";
import Group19 from "../ImgAssets/Group19.png";
import Group17 from "../ImgAssets/Group17.png";
import Path2 from "../ImgAssets/Path2.png";
import Path8 from "../ImgAssets/Path8.png";

import Navbar from "@/components/Navbar";
import TalentCard from "@/components/TalentCard";
import MyWork from "@/components/Opportunities";
import Opportunities from "@/components/Opportunities";

export default function Home() {
  return (
    <>
      <Navbar />
      <TalentCard />
      <div className="flex-col justify-items-center">
        <div className="relative w-full flex justify-center items-center">
          <Image
            src={Group56}
            alt="Picture of Group56"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="mt-48"
          />
          <Image
            src={Group8}
            alt="Picture of Group8"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "40%", height: "auto" }}
            className="absolute top-18 left-40"
          />
        </div>
        <div className="relative w-full flex flex-col items-center justify-center min-h-screen my-11">
          <Image
            src={Group19}
            alt="Picture of Group19"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
          />
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
          <Image
            src={Group17}
            alt="Picture of Group17"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
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
      </div>
      <Opportunities />
    </>
  );
}
