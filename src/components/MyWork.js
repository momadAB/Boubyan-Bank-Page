import React from "react";
import Image from "next/image";
import Group38 from "../ImgAssets/Group38.png";
import Group25 from "../ImgAssets/Group25.png";
import Group26 from "../ImgAssets/Group26.png";
import Group27 from "../ImgAssets/Group27.png";
import Group28 from "../ImgAssets/Group28.png";
import Group29 from "../ImgAssets/Group29.png";
import Group35 from "../ImgAssets/Group35.png";
import Group44 from "../ImgAssets/Group44.png";
import Available from "../ImgAssets/AvailableOpportunit.png";
import Group37 from "../ImgAssets/Group37.png";
import Path2 from "../ImgAssets/Path2.png";

function MyWork() {
  return (
    <div>
      <Image
        src={Group37}
        alt="Picture of Group37"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <Image
        src={Path2}
        alt="Picture of Path2"
        width={0}
        height={0}
        sizes="100vw"
        className="flex justify-end items-end text-end"
        style={{
          width: "10%",
          height: "auto",
          transform: "rotate(270deg)",
        }}
      />
      <div>
        <Image
          src={Group38}
          alt="Picture of Group38"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <Image
        className="flex justify-start items-start"
        src={Available}
        alt="Text of Available Opportunities"
        sizes="100vw"
        style={{ width: "376px", height: "48px" }}
      />
      <Image
        src={Group44}
        alt="Picture of Group44"
        sizes="100vw"
        style={{ width: "590px", height: "39px" }}
      />
      <div className="flex flex-col justify-start gap-10">
        <Image
          src={Group25}
          alt="Picture of Group25"
          sizes="100vw"
          style={{
            width: "516px",
            height: "170px",
          }}
        />
        <div className="relative">
          <Image
            src={Group26}
            alt="Picture of Group26"
            sizes="100vw"
            style={{
              width: "516px",
              height: "170px",
            }}
          />
          <Image
            src={Group35}
            alt="Picture of Group35"
            sizes="100vw"
            className="absolute bottom-0 ml-6 mb-5"
            style={{ width: "470px", height: "36px" }}
          />
        </div>
        <Image
          src={Group27}
          alt="Picture of Group27"
          sizes="100vw"
          style={{
            width: "516px",
            height: "170px",
          }}
        />
        <Image
          src={Group28}
          alt="Picture of Group28"
          sizes="100vw"
          style={{
            width: "516px",
            height: "170px",
          }}
        />
        <Image
          src={Group29}
          alt="Picture of Group29"
          sizes="100vw"
          style={{
            width: "516px",
            height: "170px",
          }}
        />
      </div>
    </div>
  );
}

export default MyWork;
