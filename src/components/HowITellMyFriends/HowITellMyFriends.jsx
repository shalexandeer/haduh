"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../Aurora/Aurora";
import { TextGenerateEffect } from "../LandingFirstText/text-generate-effect";

export function HowITellMyFriends() {
  return (
    <div className='h-screen'>
      <div
        className={
          "max-w-[1440px] w-full mx-auto h-screen p-10 grid place-items-center"
        }>
        <div className='grid grid-cols-1'>
          <div className='grid place-items-center'>
            <h1 className='text-5xl '>Familiarity!</h1>
          </div>
          <div>
            <TextGenerateEffect words='Ive never thought that the first time when I saw you, your strong vibes makes me wonder, why you felt so familiar. And that is why I really loved to be around you and your class ' />
          </div>
        </div>
      </div>
    </div>
  );
}
