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
            src="/Ethical Hacking.jpg"
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
            Learning Web Security Through Burp Suite
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            A hands-on learning experience using Burp Suite to analyze web traffic, test vulnerabilities, and understand the ethical responsibilities of cybersecurity professionals.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>November 6, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>8 min read</span>
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
          Using Burp Suite for the first time was a turning point in my cybersecurity learning journey. 
          Before this, web security was mostly theoretical for me—terms like “payload,” “requests,” and “responses” were difficult to visualize. 
          But once I started intercepting traffic in Burp Suite, everything finally made sense.
        </p>

        <p>
          Burp Suite works as a middleman between the browser and the web server. 
          It allows users to capture and examine HTTP requests in real time. 
          Through the Proxy tool, I was able to see exactly what data my browser sends whenever I log in or submit a form. 
          This made me realize how exposed web traffic can be if not protected properly.
        </p>

        <p>
          The Repeater tool allowed me to resend and modify requests manually. 
          This helped me understand how attackers test for vulnerabilities like SQL Injection and XSS. 
          Meanwhile, Intruder showed me how automated attacks are performed using multiple payloads. 
          The Sequencer tool demonstrated how weak session tokens could be predicted, leading to session hijacking.
        </p>

        <p>
          What stood out to me the most is that Burp Suite is not just a hacking tool—it is a learning platform. 
          When combined with practice environments like TryHackMe and DVWA, 
          it allows students like me to safely explore real-world attack scenarios without breaking the law.
        </p>

        <p>
          This experience taught me more than just technical skills. 
          It taught me responsibility. Ethical hacking requires discipline, permission, and professionalism. 
          As a student, Burp Suite helped shape my identity not as a hacker, but as a defender who understands how attackers think.
        </p>

      </motion.main>
    </motion.section>
  );
}