"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="mt-10 h-screen w-full py-0"> {/* Ensuring the grid takes full viewport height */}
      <LayoutGrid cards={cards} />
    </div>
  );
}


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Humble Beginnings
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Established in 1997 with a philanthropic outlook of serving people in the fields of education and healthcare.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Two Pillars
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Dr S N Subbramanian and Dr S Rajalaskhmi laid the foundation for what SNS institutions is today.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
         Harmony & Happiness
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      In this journey filled with ups and downs, only a supportive companion can help you go far.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Taste of Success
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        SNS institutions started to gain popularity among people for its quality of education.
      </p>
    </div>
  );
};

const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/thumbnail2.png", // Local image from public/images
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/thumbnail1.png", // Local image from public/images
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/thumbnail3.png", // Local image from public/images
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/thumbnail4.png", // Local image from public/images
    },
  ];
  