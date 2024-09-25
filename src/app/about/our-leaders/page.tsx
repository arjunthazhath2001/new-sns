"use client";
import Leader1 from '@/components/Leader1';
import Leader2 from '@/components/Leader2';
import Leader3 from '@/components/Leader3';
import React from 'react';

function OurLeaders() {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center justify-start overflow-hidden">  
        <Leader1 />   
        <Leader2 />
        <Leader3 />         
    </div>
  );
}

export default OurLeaders;
