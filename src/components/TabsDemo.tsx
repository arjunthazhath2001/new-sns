"use client";
import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Design Thinking",
      value: "design-thinking",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-orange-400">
          <p>Design Thinking</p>
          <ImageContent src="/images/design-thinking.png" />
        </div>
      ),
    },
    {
      title: "5 Pillars",
      value: "5-pillars",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-orange-400">
          <p>5 Pillars</p>
          <ImageContent src="/images/5-pillars.png" />
        </div>
      ),
    },
    {
      title: "SPINE",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-orange-400">
          <p>SPINE</p>
          <ImageContent src="/images/spine.png" />
        </div>
      ),
    },
    {
      title: "Innovation Hub",
      value: "ihub",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-orange-400">
          <p>Innovation Hub</p>
          <ImageContent src="/images/innovation-hub.png" />
        </div>
      ),
    },
    {
      title: "Youth Wing",
      value: "youth-wing",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-orange-400">
          <p>Youth Wing</p>
          <ImageContent src="/images/youth-wing.png" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[10rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-32 mb-32">
      <Tabs tabs={tabs} />
    </div>
  );
}

const ImageContent = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="tab content image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
