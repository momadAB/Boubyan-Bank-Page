import Image from "next/image";
import ApplySection from "./components/ApplySection";
import TalentCard from "@/components/TalentCard";
import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part3 from "./components/Part3";

export default function Home() {
  return (
    <div className="flex-col justify-items-center mt-10">
      <Header />
      <Part1 />
      <TalentCard />
      <Part3 />
      <ApplySection />
    </div>
  );
}
