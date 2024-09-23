"use client";
import React, { useState } from "react";
import { ProductItem, HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-6 inset-x-0 max-w-md mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    
                </MenuItem>
            </Link>

            
            <MenuItem setActive={setActive} active={active} item="About">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Our Leaders"
              href="#"
              src="/images/dropdown1.png"
              description="Meet the visionary leaders behind our institution"
            />
            <ProductItem
              title="Differentiators"
              href="#"
              src="/images/dropdown2.png"
              description="Discover what sets our institution apart"
            />
            <ProductItem
              title="Student Life"
              href="#"
              src="/images/dropdown3.png"
              description="Experience the vibrant student life at SNS"
            />
            <ProductItem
              title="Publications"
              href="#"
              src="/images/dropdown4.png"
              description="Explore for the latest insights and updates at SNS"
            />
          </div>



        </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Careers">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Jobs at SNS"
              href="#"
              src="/images/jobs1.png"
              description="Explore jobs at SNS Groups"
            />
            <ProductItem
              title="Internships"
              href="#"
              src="/images/jobs2.png"
              description="Internship openings for freshers"
            />

            <ProductItem
              title="Jobs for Alumni"
              href="#"
              src="/images/jobs3.png"
              description="Jobs curated for SNS Alumni"
            />
            <ProductItem
              title="Non-alumni Jobs"
              href="#"
              src="/images/jobs4.png"
              description="Jobs curated for Non-SNS students"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="News">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Upcoming Events"
              href="#"
              src="/images/news1.png"
              description="What's next at SNS?"
            />
            <ProductItem
              title="Recent Events"
              href="#"
              src="/images/news2.png"
              description="Recent happenings at SNS"
            />

            <ProductItem
              title="Student Achievements"
              href="#"
              src="/images/news3.png"
              description="Recent achievements of SNS students"
            />
            <ProductItem
              title="Media Coverage"
              href="#"
              src="/images/news4.png"
              description="SNS in newspapers & media"
            />
          </div>
        </MenuItem>
            
        </Menu>
    </div>
  )
}

export default Navbar