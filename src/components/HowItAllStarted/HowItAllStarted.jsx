"use client";
import { useEffect } from "react";
import styles from "./HowItAllStarted.module.css";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const phrase =
  "Just in case no one has told you this today, I'm so proud of you and everything you have endured and achieved. I hope you know how worthy you are and how much you bring to the world.";

export default function HowItAllStarted() {
  let refs = useRef([]);
  const container = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,

        scrub: true,

        start: `top`,

        end: `+=${window.innerHeight / 1.5}`,
      },

      opacity: 1,

      ease: "none",

      stagger: 0.1,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}>
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main
      ref={container}
      className={styles.main}>
      <div
        ref={body}
        className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
}
