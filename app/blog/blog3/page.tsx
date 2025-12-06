'use client';

import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Blog3() {
  // Scroll-based parallax effect
  const { scrollY } = useViewportScroll();
  // Move image slower than scroll for parallax effect
  const yPos = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.section
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      {/* HERO SECTION */}
      <header className="relative w-full h-[60vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div className="absolute inset-0" style={{ y: yPos }}>
          <Image
            src="/Web Security.jpg"
            alt="Blog 1 Cover"
            fill
            className="object-cover w-full h-full"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
        </motion.div>

        {/* Title, Subtitle & Metadata */}
        <motion.div
          className="relative max-w-4xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#5459AC] mb-4 leading-tight drop-shadow-lg">
            SQL Injection and XSS: The Power of User Input
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            A reflective exploration of how insecure input handling enables SQL Injection and Cross-Site Scripting, emphasizing the critical role of validation in secure software design.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>October 24, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>7 min read</span>
            <span className="mx-2 hidden md:inline"></span>
          </div>
        </motion.div>
      </header>

      {/* MAIN ARTICLE CONTENT */}
      <motion.main
        className="max-w-3xl mx-auto px-6 py-15 space-y-10 text-gray-200 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <p>
          When I first learned about SQL Injection and Cross-Site Scripting (XSS), I was shocked by how simple yet powerful these attacks can be. 
          As a student, I always thought hackers needed advanced tools or complex codes. 
          But these vulnerabilities showed me that sometimes, security fails because of something as small as unchecked user input.
        </p>

        <p>
          SQL Injection happens when attackers insert malicious SQL commands into input fields like login forms or search boxes. 
          If the system does not properly sanitize these inputs, attackers can manipulate the database—bypassing authentication, modifying information, or even deleting entire records. 
          What scared me most is that one poorly written query is enough to expose an entire database.
        </p>

        <p>
          XSS, on the other hand, targets users instead of databases. 
          Attackers inject malicious scripts into websites, and once a victim loads the page, the script runs in their browser. 
          This can lead to stolen cookies, hijacked sessions, and fake website redirections. 
          I learned that XSS does not just affect one user—it can infect everyone who visits the compromised page.
        </p>

        <p>
          Both attacks taught me a powerful cybersecurity principle: never trust user input. 
          Every character typed into a system must be validated, filtered, and encoded properly. 
          Without strict validation, systems become vulnerable from the inside.
        </p>

        <p>
          As a student, this topic changed the way I look at even the simplest input forms. 
          I now understand that security begins at the smallest level of system design. 
          One vulnerable text box can cause irreversible damage. 
          This realization strengthened my interest in secure software development and defensive coding.
        </p>

      </motion.main>
    </motion.section>
  );
}