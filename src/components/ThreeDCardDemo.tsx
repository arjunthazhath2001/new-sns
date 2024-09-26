"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";

export function ThreeDCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      {/* First Row */}
      <Card
        title="Souvenir"
        description="Celebrating 25 years of SNS groups"
        imageSrc="/images/mag1.png"
        pdfSrc=""
      />
      <Card
        title="Info Brochure"
        description="Another milestone achievement"
        imageSrc="/images/mag2.png"
        pdfSrc=""
      />
      <Card
        title="Alumni Testimonials"
        description="Special edition SNS groups"
        imageSrc="/images/mag3.png"
        pdfSrc=""
      />

      {/* Second Row */}
      <Card
        title="Souvenir"
        description="Celebrating 25 years of SNS groups"
        imageSrc="/images/mag1.png"
        pdfSrc=""
      />
      <Card
        title="Info Brochure"
        description="Another milestone achievement"
        imageSrc="/images/mag2.png"
        pdfSrc=""
      />
      <Card
        title="Alumni Testimonials"
        description="Special edition SNS groups"
        imageSrc="/images/mag3.png"
        pdfSrc=""
      />

      {/* Third Row */}
      <Card
        title="Souvenir"
        description="Celebrating 25 years of SNS groups"
        imageSrc="/images/mag1.png"
        pdfSrc=""
      />
      <Card
        title="Info Brochure"
        description="Another milestone achievement"
        imageSrc="/images/mag2.png"
        pdfSrc=""
      />
      <Card
        title="Alumni Testimonials"
        description="Special edition SNS groups"
        imageSrc="/images/mag3.png"
        pdfSrc=""
      />
    </div>
  );
}

function Card({
  title,
  description,
  imageSrc,
  pdfSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
  pdfSrc: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer to trigger animations when the card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }} // Initial animation state (invisible, slightly below)
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible and move up when the card is in view
      transition={{ duration: 0.75 }} // Duration of the animation
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-auto h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-yellow-500">
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageSrc}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>

          <div className="flex justify-between items-center mt-10">
            {/* Read now - opens PDF in a new tab */}
            <CardItem
              translateZ={20}
              as={Link}
              href={pdfSrc}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Read now →
            </CardItem>

            {/* Download - triggers PDF download */}
            <CardItem
              translateZ={20}
              as="a"
              href={pdfSrc}
              download
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Download
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
