'use client';

import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Blog2() {
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
            src="/Cybersecurity.jpg"
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
            Web Application Security: Why Every Click Matters
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            An academic insight into how web applications enforce confidentiality, integrity, and availability, highlighting how small security lapses can lead to large-scale cyber incidents.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>October 17, 2025</span>
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
          Every time I click a button on a website—whether to log in, submit a form, or make an online purchase—I am taking part in a process that involves multiple security layers. 
          Before studying web application security, I never really thought about these processes. 
          I simply trusted that websites would keep my information safe. 
          However, as a computer science student, I learned that security is never automatic—it must be carefully designed and continuously maintained.
        </p>

        <p>
          Web application security is focused on protecting websites and online systems from unauthorized access, data breaches, and cyberattacks. 
          I learned that modern websites are no longer just static pages. 
          They are interactive platforms that process sensitive information such as usernames, passwords, financial records, and personal data. 
          This makes them highly attractive targets for attackers.
        </p>

        <p>
          One of the most important frameworks we studied is the CIA Triad: Confidentiality, Integrity, and Availability. 
          Confidentiality ensures that only authorized users can access data. 
          Integrity ensures that information is not altered without permission. 
          Availability ensures that systems remain accessible even during attacks. 
          Seeing how this model applies directly to web platforms helped me understand security at a system-wide level.
        </p>

        <p>
          The Change Healthcare ransomware case of 2024 left a deep impact on me. 
          A single missing security control—multi-factor authentication—led to billions in financial losses and affected millions of individuals. 
          This case study showed me that cybersecurity failures are not just technical problems. 
          They affect lives, businesses, and entire communities.
        </p>

        <p>
          As a student, this lesson transformed me from a passive internet user into a more aware digital citizen. 
          I now think twice before entering personal information online and understand why developers must carefully secure every system component. 
          In web security, every click truly matters.
        </p>

      </motion.main>
    </motion.section>
  );
}