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
            src="/Email Security.jpg"
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
            Email Security: Protecting the Most Common Digital Gateway
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            A security-focused discussion on how email systems are protected through encryption, authentication, and threat detection to prevent phishing and social engineering attacks.
          </p>

          {/* Decorative line */}
          <div className="h-1 w-24 bg-[#5459AC] bg-800 mx-auto mb-6 rounded-full"></div>

          {/* Metadata */}
          <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm md:text-base">
            <span className="mx-2 hidden md:inline"></span>
            <span>December 4, 2025</span>
            <span className="mx-2 hidden md:inline">|</span>
            <span>9 min read</span>
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
          Out of all the technologies we use daily, email feels the most ordinary. 
          I use it for school announcements, submissions, account registrations, and personal messages. 
          Yet, after studying Email Security Fundamentals, I realized that email is also one of the most exploited entry points for cyberattacks.
        </p>

        <p>
          At its core, email works like a digital post office. 
          A message is composed in an email client, sent through an SMTP server, routed using DNS and MX servers, and finally delivered to the recipient’s inbox. 
          Learning this step-by-step process helped me understand why email is such a powerful attack vector—it passes through many digital hands before reaching its destination.
        </p>

        <p>
          Email security is built on five essential principles:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li><b>Confidentiality</b> – Only authorized users should access messages.</li>
          <li><b>Integrity</b> – Messages must not be altered in transit.</li>
          <li><b>Availability</b> – Email services must remain accessible.</li>
          <li><b>Authentication</b> – The sender’s identity must be verified.</li>
          <li><b>Non-repudiation</b> – Senders cannot deny sending a message.</li>
        </ul>

        <p>
          Seeing these five principles together made me realize how complex it is to truly secure something as “simple” as email.
        </p>

        <p>
          One of the most important protections is email encryption, which scrambles messages so that only the intended recipient can read them. 
          This protects sensitive information such as login credentials, financial records, and personal data during transmission and storage.
          Before this lesson, I thought encryption was only for websites—but now I understand that secure email is just as critical.
        </p>

        <p>I also learned about two major encryption standards: S/MIME and OpenPGP.</p>

        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li><b>S/MIME</b> relies on digital certificates from trusted Certificate Authorities and is commonly used in enterprise environments.</li>
          <li><b>OpenPGP</b> uses public and private keys and follows a decentralized “web of trust” model, making it popular among privacy-focused users.</li>
        </ul>

        <p>
          This comparison helped me understand how security models vary depending on whether the environment is corporate or personal.
        </p>

        <p>
          The most alarming part of this lesson was learning about email-based threats. 
          Phishing, spear-phishing, malware attachments, spoofing, business email compromise (BEC), and social engineering are all actively used to manipulate users into exposing sensitive data. 
          What scared me the most is that these attacks do not target systems first—they target people. 
        </p>

        <p>
          Another powerful skill I gained was analyzing email headers. 
          By checking SPF, DKIM, and DMARC authentication results, security analysts can detect whether an email is legitimate or spoofed. 
          Tools like Message Header Analyzers translate complex header data into readable results for faster investigation. 
          This made me realize that security professionals do not rely on guesswork—they rely on digital evidence. 
        </p>

        <p>
          As a student, this lesson made me rethink how casually I used to open emails. 
          I now understand that one careless click is enough to compromise not only my own data, but potentially an entire network. 
          Email security taught me that cybersecurity is not only technical—it is behavioral.
        </p>

        <p>
          In the digital world, email is the front door. And like all doors, it must be locked, monitored, and respected.
        </p>

      </motion.main>
    </motion.section>
  );
}