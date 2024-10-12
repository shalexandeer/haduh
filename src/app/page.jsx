"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Description from "../components/Description";
import SlidingImages from "../components/SlidingImages";
import Contact from "../components/Contact";
import ZoomParallax from "@/components/ZoomParallax";
import StickyCursor from "@/components/StickyCursor/StickyCursor";
import ValleySong from "../../public/audio/boysandgirlsvalley.mp3";
import HowItAllStarted from "@/components/HowItAllStarted/HowItAllStarted";
import { InThatClass } from "@/components/InThatClass/InThatClass";
import { HowITellMyFriends } from "@/components/HowITellMyFriends/HowITellMyFriends";
import { Spotify } from "react-spotify-embed";
import { TryToGuess } from "@/components/TryToGuess/TryToGuess";
import ImProudOfYou from "@/components/ImProudOfYou/ImProudOfYou";
import { TextGenerateEffect } from "@/components/LandingFirstText/text-generate-effect";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  function playAudio() {
    new Audio(ValleySong).play();
  }
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 1000); // Delay for 1 second (adjust as needed)
    })();
  }, [playAudio]);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Landing />
          <Description />
          <ImProudOfYou />
          {/* <HowItAllStarted /> */}
          <div
            className={
              "max-w-[1440px] w-full mx-auto p-10 grid place-items-center"
            }>
            <div className='grid grid-cols-1'>
              <div className='grid place-items-center'>
                <h1 className='text-5xl'>The Gift</h1>
              </div>
              <div className='mt-5'>
                <span className='font-bold'>One</span> I made you bracelet &
                gantungan hp that I made by myself. Itu oleh oleh dari pasar
                influencer, aku jadi berangkat hahahah karena udah janji juga.
                <span className='font-bold'>Two</span> masih inget kamu cerita
                sering kebangun malem?. aku harap bunny ini bisa jadi temen kamu
                waktu kamu kebangun yaa!{" "}
                <span className='font-bold'>Three</span> inget waktu pertama
                kali jalan kamu suka candles nya Grammars?
              </div>
            </div>
          </div>
          <ZoomParallax />
          <InThatClass />
          <HowITellMyFriends />
          <div
            className={
              "max-w-[1440px] w-full mx-auto h-screen p-10 grid place-items-center"
            }>
            <div className='grid grid-cols-1'>
              <div className='grid place-items-center'>
                <h1 className='text-5xl'>
                  There is so many text that I wrote before your birthday
                </h1>
              </div>
              <div>
                <TextGenerateEffect words="But I don't think that it matters anymore. I can finally understand finales. I've come to accept that I'm no longer a piece of a character in your life, but rather a viewer, and just because our story ends here doesn't mean either of us will stop moving forward. You're a wonderful girl who has a lot of dreams to come true, and I hope you will. Maybe your own story or the next will help you achieve all your dreams, and I truly believe that. I used to hate the bad endings of stories. For a long time, this was a big struggle of mine because once the story was over, that was it. But I came to the realization that it's good to let the beautiful butterfly fly higher and higher" />
              </div>
            </div>
          </div>
          <div
            className={
              "max-w-[1440px] w-full mx-auto h-screen p-10 grid place-items-center"
            }>
            <div className='grid grid-cols-1'>
              <div className='grid place-items-center'>
                <h1 className='text-5xl'>
                  Thank you for let me know you for a while!
                </h1>
              </div>
              <div>
                <TextGenerateEffect words='Thank you for letting me know you for a while!' />
              </div>
            </div>
          </div>
          {/* <Projects />
          <SlidingImages />
          <Contact /> */}
        </>
      )}

      <StickyCursor />
    </main>
  );
}
