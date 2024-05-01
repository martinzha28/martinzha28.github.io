"use client";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div id="About Me Section" className="flex flex-col sm:flex-row gap-10 ">
      <div className="w-full sm:w-1/3">
        <Image
          className="aspect-square rounded-lg border-4 object-contain border-white"
          src="hack-the-north-headshot.jpg"
          alt="Headshot"
          loading="lazy"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-full sm:w-2/3 flex flex-col gap-5 whitespace-pre-line">
        <div className="flex flex-row flex-wrap text-3xl">
          <p className="text-let-blue"> const&nbsp;</p>
          <p className="text-variable-blue"> name&nbsp;</p>
          <p className="text-white"> :&nbsp;</p>
          <p className="text-type-dec-cyan"> String&nbsp;</p>
          <p className="text-white"> =&nbsp;</p>
          <p className="text-string-orange"> "Martin Zhao" </p>
          <p className="text-white"> ; </p>
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
        "// Welcome to my Personal Portfolio! \n //",
        1500,
        "// Welcome to my Personal Portfolio! \n// Computer Science Student.",
        1100,
        "// Welcome to my Personal Portfolio! \n// Full-Stack Developer.",
        1100,
        "// Welcome to my Personal Portfolio! \n// AWS Certified.",
        1100,
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: "2rem", display: "inline-block", color: "#729757" }}
      repeat={Infinity}
    />
  );
};
