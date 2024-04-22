"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <div className="flex flex-row gap-10 ">
      <img
        className="object-scale-down max-h-full m-auto h-96 rounded-lg border-4"
        src="../../../hack-the-north-headshot.jpg"
        alt="Headshot"
      />
      <div className="grow flex flex-col gap-5 whitespace-pre-line">
        <div className="flex flex-row flex-wrap text-3xl">
          <p className="text-[#689CD4]"> const&nbsp;</p>
          <p className="text-[#70C1FD]"> name&nbsp;</p>
          <p className="text-[#FFFFFF]"> :&nbsp;</p>
          <p className="text-[#6EC7B0]"> String&nbsp;</p>
          <p className="text-[#FFFFFF]"> =&nbsp;</p>
          <p className="text-[#C5927A]"> "Martin Zhao" </p>
          <p className="text-[#FFFFFF]"> ; </p>
        </div>
        <TypeComponent />
        <p>
          I'm a 3B Computer Science Student studying at the University of
          Waterloo!
        </p>
        <p>
          I love exploring automation methods and understanding the end-to-end
          software development process. I hope to work with large code bases,
          and slowly uncover how components interact with eact other.
        </p>
        <p>
          Currently I'm working a web application 🤭 to be released when
          ready... In the meantime I'm experimenting with AWS. I'm happy to
          connect with anyone! Feel free to reach out!
        </p>
      </div>
    </div>
  );
}

const TypeComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "// Welcome to my Personal Portfolio! \n",
        1200,
        "// Welcome to my Personal Portfolio! \n// Computer Science Student.",
        700,
        "// Welcome to my Personal Portfolio! \n// Full-Stack Developer.",
        700,
        "// Welcome to my Personal Portfolio! \n// AWS Certified.",
        700,
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: "2em", display: "inline-block", color: "#729757" }}
      repeat={Infinity}
    />
  );
};
