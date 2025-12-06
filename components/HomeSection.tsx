// components/HomeSection.tsx
'use client'

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function HomeSection() {
  const photoControls = useAnimation();
  const textControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      photoControls.start({ opacity: 1, x: 0 });
      textControls.start({ opacity: 1, x: 0 });
    } else {
      photoControls.start({ opacity: 0, x: -30 }); // photo slides from left
      textControls.start({ opacity: 0, x: 30 });   // text slides from right
    }
  }, [inView, photoControls, textControls]);

  return (
    <section
      id="home"
      ref={ref}
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-gradient-to-br from-[#360185] to-[#5459AC]"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={photoControls}
        transition={{ duration: 0.7 }}
      >
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl">
          <Image
            src="/24-12954-522.jpg"
            alt="Profile photo"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={textControls}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left text-white"
      >
        <h1 className="text-5xl font-bold">Shania Mae Ucag</h1>
        <p className="text-xl mt-3">
          Future Data Analyst & SOC Analyst
        </p>
      </motion.div>
    </section>
  );
}