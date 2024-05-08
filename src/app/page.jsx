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
        playAudio();
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Landing />
          <Description />
          <ZoomParallax />
          <InThatClass />
          <HowITellMyFriends />
          <HowItAllStarted />
          <Projects />
          <SlidingImages />
          <Contact />
        </>
      )}

      <StickyCursor />
    </main>
  );
}
