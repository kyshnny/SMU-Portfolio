'use client';

import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Blog1() {
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
            src="/Encryption.jpg"
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
            Understanding Encryption in a Digital-First World
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            A student-centered reflection on how encryption secures online communication, protects digital identities, and forms the foundation of trust in modern information systems.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>October 16, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>6 min read</span>
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
          In today’s digital-first world, encryption plays a silent but critical role in protecting almost every aspect of our online lives. 
          As a BSCS student learning about cybersecurity, I used to think that security was mostly about strong passwords. 
          However, after studying encryption in depth, I realized that passwords are only the surface. 
          True security is built at the data level, and encryption is what makes that possible.
        </p>

        <p>
          Encryption is the process of converting readable data, called plaintext, into an unreadable format known as ciphertext. 
          This ensures that even if the data is intercepted, it cannot be understood without the correct cryptographic key. 
          This concept is utilized daily when we log into social media accounts, send private messages, or conduct online banking transactions. 
          What amazed me most is how seamlessly encryption works behind the scenes—we rely on it constantly without even noticing.
        </p>

        <p>
          Through my learning, I came to understand the difference between symmetric encryption, which uses a single shared key, and asymmetric encryption, which uses both public and private keys. 
          Symmetric encryption is fast and efficient, making it ideal for large data transfers. 
          Meanwhile, asymmetric encryption ensures identity verification and secure communication between unknown parties, especially on the internet.
        </p>

        <p>
          One of the most fascinating parts of encryption for me was learning about key exchange algorithms, particularly Diffie-Hellman. 
          This method allows two users to establish a shared secret key even over an insecure network. 
          The fact that this process can occur without exposing the actual key to attackers shows how powerful cryptography truly is.
        </p>

        <p>
          As a student, this topic reshaped how I understand digital trust. 
          Encryption is not just about privacy—it is about safety, confidence, and system integrity. 
          Without encryption, online systems would collapse under the weight of cybercrime. 
          This realization made me appreciate the invisible security measures that protect my digital footprint every single day.
        </p>

      </motion.main>
    </motion.section>
  );
}