import Image from "next/image";
import Group56 from "../ImgAssets/Group56.png";
// import Group8 from "../ImgAssets/Group8.png";
// import Group19 from "../ImgAssets/Group19.png";
// import Group17 from "../ImgAssets/Group17.png";
import Path2 from "../ImgAssets/Path2.png";
import Path8 from "../ImgAssets/Path8.png";

import ApplySection from "./components/ApplySection";
import TalentCard from "@/components/TalentCard";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part3 from "./components/Part3";
import Navbar from "@/components/Navbar";
import MyWork from "@/components/Opportunities";
import Opportunities from "@/components/Opportunities";

export default function Home() {
  return (
    <div className="flex-col justify-items-center mt-10">
      <Header />
      <Part1 />
      <TalentCard />
      <Part3 />
      <ApplySection />

      <Opportunities />
    </div>
  );
}
