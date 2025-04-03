"use client";
import React, { useState } from "react";
import Image from "next/image";

import NameTitle from "./titles/nametitle";
import ShowOnScroll from "../animations/showonscroll";
import BulletPoint from "./bulletpoint";

export default function AboutMe() {
  return (
    <div id="About Me Section" className="flex flex-col sm:flex-row gap-10 ">
      <div className="w-full sm:w-1/3">
        <Image
          className="aspect-square rounded-lg border-4 object-contain border-gray-text dark:border-white"
          src="hack-the-north-headshot.jpg"
          alt="Headshot"
          loading="lazy"
          width={1000}
          height={1000}
        />
      </div>

      <ShowOnScroll className="w-full sm:w-2/3 flex flex-col gap-5 whitespace-pre-line" timing={250} delay={500}>
        <NameTitle />
        <BulletPoint point={"Software Engineer"} />
        <BulletPoint point={"Computer Science Student"} />
        <BulletPoint point={"AWS Certified"} />
        <p className="text-gray-text dark:text-white">
          Welcome to my Personal Portfolio! I'm a 4A Computer Science Student
          studying at the University of Waterloo!
        </p>
        <p className="text-gray-text dark:text-white">
          Currently I am contributing to Shopify's API Foundations team, specializing in GraphQL and API development.
          Previously, I worked in developing scalable component libraries during internships at Nuralogix AI and Marsh McLennan.
        </p>
        <p className="text-gray-text dark:text-white">
          On the side, I'm working a web application 🤭 to be released when ready...
          In the meantime I'm experimenting with AWS. 
          I'm happy to connect with anyone! Feel free to reach out!
        </p>
      </ShowOnScroll>
    </div>
  );
}
