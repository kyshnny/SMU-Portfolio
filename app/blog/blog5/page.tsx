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
            src="/Network Traffic.jpg"
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
            Seeing the Internet in Motion: My First Look into Network Traffic Analysis
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            An academic reflection on capturing and analyzing network packets using traffic analysis tools, revealing how abnormal patterns expose potential cyber threats.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>November 26, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>10 min read</span>
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
          Before studying Network Traffic Analysis, I always thought of the internet as something invisible and automatic. 
          Data just “travels,” and we receive it instantly. 
          But after learning how traffic is captured, filtered, and analyzed, 
          I finally saw that every online action—every click, message, and login—creates real network activity that can be observed, measured, and investigated.
        </p>

        <p>
          Network Traffic Analysis is defined as the process of capturing, inspecting, and analyzing data flow across a network to understand behavior, identify threats, and maintain security. 
          It allows security professionals to establish a baseline of normal activity and detect anything that deviates from it. 
          This changed the way I see cybersecurity—from something that reacts to attacks, to something that constantly watches and anticipates danger.
        </p>

        <p>
          One of the foundational topics that helped me understand traffic analysis better is the OSI Model. 
          It organizes communication into seven layers, from physical transmission up to application-level interactions. 
          Seeing how traffic flows from the Application Layer (HTTP, FTP) down to the Transport (TCP/UDP) and Network Layer (IP) 
          made me realize how many security checkpoints data passes through before it reaches its destination.
        </p>

        <p>
          What fascinated me most was learning about Wireshark, a powerful network traffic analyzer. 
          Through Wireshark, packets are displayed in three main sections:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>The <b>Packet List</b>, showing summaries of each captured packet.</li>
          <li>The <b>Packet Details</b>, which reveal protocol information across OSI layers.</li>
          <li>The <b>Packet Bytes</b>, which display the actual raw data in hex and ASCII format.</li>
        </ul>

        <p>
          For the first time, I understood that network communication is not abstract—it is a series of structured, readable exchanges that can be examined down to the smallest detail.
        </p>

        <p>
          Filtering traffic was another major lesson for me. 
          I learned the difference between capture filters (which limit what traffic is collected) and display filters (which refine what is already captured). 
          A simple command like filtering only tcp port 80 traffic can instantly narrow analysis to web-based communication.
          This taught me that cybersecurity is not just about collecting data—it is about asking the right questions of the data.
        </p>

        <p>
          The concepts of descriptive, diagnostic, predictive, and prescriptive analysis also stood out to me. 
          These approaches showed that traffic analysis is not only about observing what happened, but also about understanding why it happened and what might happen next. 
          This predictive side of cybersecurity made the field feel more strategic and intelligent than I initially imagined.
        </p>

        <p>
          As a student, this lesson completely reshaped my perspective on how attacks are detected. 
          I now understand that most cyberattacks leave patterns and traces in network traffic long before damage becomes visible. 
          Network Traffic Analysis teaches us to listen to the silent warnings inside the system.
        </p>

        <p>
          This topic helped me realize that cybersecurity is not always loud or dramatic. 
          Sometimes, it is quiet, patient, and built on observation. 
          And often, the smallest abnormal signal is the first sign of a much larger threat.
        </p>

      </motion.main>
    </motion.section>
  );
}