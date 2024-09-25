"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
  <div className="max-w-2xl mx-auto max-h-full bg-transparent antialiased text-black dark:text-white pt-4 relative">
    {dummyContent.map((item, index) => (
      <div key={`content-${index}`} className="mb-10">
        <h2 className="bg-black dark:bg-white dark:text-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
          {item.badge}
        </h2>
        <p className="text-2xl font-bold mb-4 text-center m-0">{item.title}</p>
        <div className="text-sm prose prose-sm dark:prose-invert mx-auto w-full max-w-[500px]">
          {item?.image && (
            <Image
              src={item.image}
              alt="blog thumbnail"
              height="500"
              width="500"
              className="rounded-lg mb-10 object-cover m-0"
            />
          )}
          <div className="bg-slate-200 text-left dark:bg-gray-800 rounded-lg p-4 mt-2 m-0">
            {item.description}
          </div>
        </div>
      </div>
    ))}
  </div>
</TracingBeam>

  );
}


const dummyContent = [
  {
    title: "Dr. S. N. Subbramanian",
    description: (
      <>
        <p> Dr. S. N. Subbramanian, born in an agricultural family near Annur, Coimbatore District, he climbed to success in his own way, setting an example for the younger generation. He ranked 3rd in B. Tech at PSG College of Technology in 1972 and 1st in M. Tech at IIT Delhi in 1975.
          <br></br> <br></br> He later earned an MBA from IBAM in New Delhi in 1986. He was awarded an M. Phil from Alagappa University in 2004. He earned two PhDs: in Engineering & Technology from Anna University in 2005 and in Management from the USA in 2008. With 45 years of experience across academics, research, and industry, he spent 20 years in academics and 25 years in industry. </p><br></br> <p> He developed colleges under Sri. SNS Charitable Trust, which gained recognition for academic excellence. His work led to SNS College of Technology ranking 4th in Coimbatore. His efforts helped achieve ISO certification and introduced innovative educational practices. </p>
      </>
    ),
    badge: "Founding Father",
    image: "/images/lead1.png"
        },
  {
    title: "Dr. S. Rajalakshmi",
    description: (
      <>
<p>Dr. S. RAJALAKSHMI is an Obstetrician &amp; Gynecologist who served at top hospitals like Eswaran Polyclinic and CSI Hospital. Over her 20-year career, she performed more than a thousand surgeries, helping families grow and earning widespread respect for her medical expertise.</p>
<br></br>
<p>She later expanded into social and educational activities. Along with her husband, a Textile Technocrat, she manages Sri SNS Charitable Trust. Her relentless efforts have broken stereotypes about women in leadership, making a lasting impact.</p>
<br></br>
<p>As Correspondent of SNS institutions, she actively supports their growth. She has won honors like &quot;Best Women Entrepreneur Award&quot; and &quot;Gold Star Award&quot; for her outstanding contributions to education and industry.</p>
  
</>
    ),
    badge: "Managing Trustee",
    image: "/images/lead2.png"
  },
  {
    title: "Dr. S. Nalin Vimal Kumar",
    description: (
      <>
<p> Dr. S. Nalin Vimal Kumar, B.E., M.S., PhD, hails from a modest background. After completing his Bachelor of Engineering in Coimbatore, he went on to earn a Masters and Doctorate in Computer Science from the United States.<br></br><br></br> For the past nine years, he has been the Technical Director of SNS Group of Institutions, where he has been effectively leading the institution. His passion lies in making education a joyful experience. He has been instrumental in improving faculty standards and introducing new teaching methodologies to enhance the student learning experience, ensuring better engagement and outcomes. </p><br></br> <p> His long-term vision is to provide quality education to society, the country, and the world, working towards creating a powerful and effective learning environment. </p>
      </>
    ),
    badge: "Trustee",
    image: "/images/lead3.png"
  },
];
