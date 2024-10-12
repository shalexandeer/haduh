import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function index() {
  const phrase =
    "I wish your birthday, would happen everyday, so I could celebrate, You in every way.";
  const description = useRef(null);
  const isInView = useInView(description);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonClicked(false);
    }, 8000);
  }, [buttonClicked]);

  return (
    <>
      <div
        ref={description}
        className={styles.description}>
        <div className={styles.body}>
          <p>
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}>
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p
            variants={opacity}
            animate={isInView ? "open" : "closed"}>
            I guess I`ll just pretend every day`s the day of your birth, Another
            opportunity to show you how much you`re worth.
          </motion.p>
          <div
            data-scroll
            data-scroll-speed={0.1}
            onClick={() => setButtonClicked(true)}>
            <Rounded className={styles.button}>
              <p>Claim the gift</p>
            </Rounded>
          </div>
        </div>
      </div>
      <div
        className={`w-full relative justify-center ${buttonClicked ? "flex" : "hidden "}`}>
        <motion.p
          className='absolute text-center'
          variants={variants}
          animate={buttonClicked ? "open" : "closed"}>
          You`re the gift, and I`m the gift-giver. Happy 19th Birthday, Vanessa
        </motion.p>
      </div>
    </>
  );
}
