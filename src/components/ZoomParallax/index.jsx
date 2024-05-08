import styles from "./styles.module.scss";
import Picture1 from "../../../public/images/reasons.jpeg";
import Picture2 from "../../../public/images/angels.jpeg";
import Picture3 from "../../../public/images/youreyes.jpeg";
import Picture4 from "../../../public/images/jatuhdarisurga.jpeg";
import Picture5 from "../../../public/images/yourvoice.jpeg";
import Picture6 from "../../../public/images/butterfly.jpeg";
import Image from "next/image";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../Description/animation";

export default function ZoomParallax() {
  const container = useRef(null);
  const isInView = useInView(container);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale7,
    },
    {
      src: Picture4,
      scale: scale8,
    },
    {
      src: Picture5,
      scale: scale9,
    },
  ];

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div
      ref={container}
      className={styles.container}>
      <motion.div
        className='w-full text-center text-4xl'
        variants={slideUp}
        animate={isInView ? "open" : "closed"}>
        <h1>Ready to deep dive onto you?</h1>
        <h1>Scroll down!</h1>
      </motion.div>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={styles.el}>
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  fill
                  alt='image'
                  placeholder='blur'
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
