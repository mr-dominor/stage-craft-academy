"use client";
import Image from "next/image";
import { poppins, forum } from "@/app/components/fonts";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltDiv from "@/app/utils/framer-tilt";

const Page = () => {
  return (
    <div className="flex flex-col cursor-pointer">
      {/* About Us */}
      <div className="flex flex-col md:flex-row overflow-hidden my-6 mx-4">
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden py-4">
          <Image
            src={`/mine/lappy/pexels-cottonbro-8208072.jpg`}
            alt=""
            fill
            className="object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
        <TiltDiv classChild={`w-full md:w-1/2 p-6`}>
          <h1 className={`text-center text-5xl md:text-7xl ${poppins.className}`}>
            About Us
          </h1>
          <p
            className={`font-medium text-justify text-gray-300 ${forum.className} py-2`}
          >
            Where Stories Breathe and Dreams Take Shape

Welcome to Stage Craft Academy, a sanctuary for imagination, expression, and transformation. Established with a deep reverence for the art of performance, our theatre is more than a stage—it is a living, breathing community where voices, emotions, and stories converge to reflect the human experience in all its beauty and complexity.

For years, we have been a home for storytellers, actors, directors, playwrights, and audiences alike. Here, tradition and innovation meet in a symphony of creativity. We believe that theatre is not merely entertainment—it is a powerful mirror, a catalyst for dialogue, and a space where empathy is born and shared.

          </p>
        </TiltDiv >
      </div>

      {/* Our Vision */}
      <div className="flex flex-col md:flex-row-reverse overflow-hidden mt-20 mx-4">
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden py-4">
          <Image
            src={`/mine/lappy/pexels-cottonbro-6899776.jpg`}
            alt=""
            fill
            className="object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
        <TiltDiv classChild={`w-full md:w-1/2 p-6`}>
          <h1 className={`text-center text-5xl md:text-7xl ${poppins.className}`}>
            Our Vision
          </h1>
          <p
            className={`font-medium text-justify text-gray-300 ${forum.className} py-2`}
          >
            To nurture a vibrant ecosystem where artistry thrives, cultural narratives are honored, and every voice finds space to be heard, we aim to bridge the gap between communities, generations, and cultures through bold storytelling, experimental performance, and immersive theatre experiences. This involves fostering collaboration between artists from different backgrounds, developing immersive theatre experiences that challenge audiences and spark dialogue, and encouraging experimental performance that pushes boundaries of storytelling and engages diverse audiences, ultimately facilitating cultural exchange, ensuring inclusive representation, and creating impactful theatre experiences through innovative storytelling.
          </p>
        </TiltDiv>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col md:flex-row overflow-hidden mt-20 mx-4">
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden py-4">
          <Image
            src={`/mine/lappy/pexels-cottonbro-7181912.jpg`}
            alt=""
            fill
            className="object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
        <TiltDiv classChild={`w-full md:w-1/2 p-6`}>
          <h1 className={`text-center text-5xl md:text-7xl ${poppins.className}`}>
            Our Mission
          </h1>
          <p
            className={`font-medium text-justify text-gray-300 ${forum.className} py-2`}
          >
            To create performances that challenge perspectives, inspire thought, and ignite passion.

To offer educational programs, workshops, and outreach initiatives that cultivate talent and foster confidence among aspiring artists.

To promote inclusivity, diversity, and accessibility within the performing arts.

To collaborate with local, national, and global talents in pushing the boundaries of creative expression.
          </p>
        </TiltDiv>
      </div>

      {/* Our Philosophy */}
      <div className="flex flex-col md:flex-row-reverse overflow-hidden mt-20 mx-4">
        <div className="relative h-96 w-full md:w-1/2 rounded-lg overflow-hidden py-4">
          <Image
            src={`/mine/lappy/about-img1.jpg`}
            alt=""
            fill
            className="object-cover hover:scale-110 transition-all ease-in-out"
          />
        </div>
        <TiltDiv classChild={`w-full md:w-1/2 p-6`}>
          <h1 className={`text-center text-5xl md:text-7xl ${poppins.className}`}>
            Our Philosophy
          </h1>
          <p
            className={`font-medium text-justify text-gray-300 ${forum.className} py-2`}
          >
            Theatre is the art of presence—of standing together in vulnerability and strength, of listening deeply, and of telling stories that matter. Every production is a dialogue between performer and audience, a shared journey that transcends language and borders.

We believe that every story deserves to be told, every emotion expressed, and every dream pursued. Through our craft, we seek to illuminate the unseen, honor the unheard, and celebrate the diverse tapestry of human experience.

          </p>
        </TiltDiv>
      </div>
    </div>
  );
};

export default Page;
