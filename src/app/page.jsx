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
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Detect if the device is desktop
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isDesktopDevice = !/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsDesktop(isDesktopDevice);

    if (isDesktopDevice) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 2000); // Delay for 1 second (adjust as needed)
      })();
    } else {
      // Skip loading for non-desktop devices
      setIsLoading(false);
    }
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {isDesktop ? (
            <>
              {/* Desktop view components */}
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
                    <span className='font-bold'>One</span> I made you a bracelet
                    and a phone charm that I made by myself. Itu oleh-oleh dari
                    pasar influencer, aku jadi berangkat hahaha karena udah
                    janji juga. <span className='font-bold'>Two</span> Masih
                    inget kamu cerita sering kebangun malem? Aku harap bunny ini
                    bisa jadi temen kamu waktu kamu kebangun yaa!{" "}
                    <span className='font-bold'>Three</span> Inget waktu pertama
                    kali jalan kamu suka candles-nya Grammars?
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
                      There are so many texts that I wrote before your birthday
                    </h1>
                  </div>
                  <div>
                    <TextGenerateEffect words="But I don't think that it matters anymore. I can finally understand finales. I've come to accept that I'm no longer a piece of a character in your life, but rather a viewer, and just because our story ends here doesn't mean either of us will stop moving forward. You're a wonderful girl who has a lot of dreams to come true, and I hope you will. Maybe your own story or the next will help you achieve all your dreams, and I truly believe that. I used to hate the bad endings of stories. For a long time, this was a big struggle of mine because once the story was over, that was it. But I came to the realization that it's good to let the beautiful butterfly fly higher and higher." />
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
                      Thank you for letting me know you for a while!
                    </h1>
                  </div>
                </div>
              </div>
              {/* Other components like Projects, SlidingImages, Contact can be added here */}
              <StickyCursor />
            </>
          ) : (
            // Message for non-desktop users
            <div className='non-desktop-message grid place-items-center h-screen'>
              Akses ini di laptop yaa!
            </div>
          )}
        </>
      )}
    </main>
  );
}
