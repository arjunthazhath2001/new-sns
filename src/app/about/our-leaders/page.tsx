"use client";
import Leader1 from '@/components/Leader1';
import Leader2 from '@/components/Leader2';
import React from 'react';

function OurLeaders() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center justify-center">  {/* Ensure this has min-h-screen */}  
        <Leader1 />   
        <Leader2 />         
    </div>
  );
}

export default OurLeaders;
