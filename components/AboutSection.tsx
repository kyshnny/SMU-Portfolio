'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const skills = [
    "Python",
    "SQL",
    "Java",
    "React",
    "C++",
    "Next.js",
    "PHP",
  ];

  const headingControls = useAnimation();
  const para1Controls = useAnimation();
  const para2Controls = useAnimation();
  const skillsControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      headingControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      para1Controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } });
      para2Controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } });
      skillsControls.start({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } });
    } else {
      headingControls.start({ opacity: 0, y: 20 });
      para1Controls.start({ opacity: 0, y: 20 });
      para2Controls.start({ opacity: 0, y: 20 });
      skillsControls.start({ opacity: 0, y: 20 });
    }
  }, [inView, headingControls, para1Controls, para2Controls, skillsControls]);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 bg-white text-[#360185] flex flex-col items-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={headingControls}
      >
        ABOUT ME
      </motion.h2>

      {/* First Paragraph */}
      <motion.p
        className="text-center mb-6 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={para1Controls}
      >
        I am a motivated and detail-oriented Computer Science student with a strong passion for data analytics, programming, and cybersecurity. 
        I enjoy solving problems, working with data, and building efficient solutions that create real value. 
        I am continuously improving my technical skills through hands-on projects, research, and practical learning experiences.
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        className="text-center mb-8 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={para2Controls}
      >
        I am particularly interested in becoming a Data Analyst and SOC Analyst, 
        where I can apply my analytical thinking, technical knowledge, and commitment to continuous learning. 
        I thrive in environments that challenge me to learn, grow, and collaborate with others to achieve meaningful results.
      </motion.p>

      {/* Skills Heading */}
      <motion.h3
        className="text-xl font-semibold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={skillsControls}
      >
        My Technical Skills:
      </motion.h3>

      {/* Skills List - 2 Columns */}
      <motion.ul
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={skillsControls}
      >
        {skills.map((skill) => (
          <motion.li key={skill} className="list-disc ml-5">
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}