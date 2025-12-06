"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function BlogSection() {
  // DYNAMIC BLOG OBJECTS
  const blogs = [
  {
    id: 1,
    title: "Understanding Encryption in a Digital-First World",
    description:
      "A student-centered reflection on how encryption secures online communication, protects digital identities, and forms the foundation of trust in modern information systems.",
    date: "October 16, 2025",
    badgeLeft: "Technology",
    badgeRight: "6 min read",
    image: "/Encryption.jpg",
  },
  {
    id: 2,
    title: "Web Application Security: Why Every Click Matters",
    description:
      "An academic insight into how web applications enforce confidentiality, integrity, and availability, highlighting how small security lapses can lead to large-scale cyber incidents.",
    date: "October 17, 2025",
    badgeLeft: "Cybersecurity",
    badgeRight: "7 min read",
    image: "/Cybersecurity.jpg",
  },
  {
    id: 3,
    title: "SQL Injection and XSS: The Power of User Input",
    description:
      "A reflective exploration of how insecure input handling enables SQL Injection and Cross-Site Scripting, emphasizing the critical role of validation in secure software design.",
    date: "October 24, 2025",
    badgeLeft: "Web Security",
    badgeRight: "7 min read",
    image: "/Web Security.jpg",
  },
  {
    id: 4,
    title: "Learning Web Security Through Burp Suite",
    description:
      "A hands-on learning experience using Burp Suite to analyze web traffic, test vulnerabilities, and understand the ethical responsibilities of cybersecurity professionals.",
    date: "November 6, 2025",
    badgeLeft: "Ethical Hacking",
    badgeRight: "8 min read",
    image: "/Ethical Hacking.jpg",
  },
  {
    id: 5,
    title: "Seeing the Internet in Motion: Network Traffic Analysis",
    description:
      "An academic reflection on capturing and analyzing network packets using traffic analysis tools, revealing how abnormal patterns expose potential cyber threats.",
    date: "November 28, 2025",
    badgeLeft: "Cybersecurity",
    badgeRight: "10 min read",
    image: "/Network Traffic.jpg",
  },
  {
    id: 6,
    title: "Email Security: Protecting the Most Common Digital Gateway",
    description:
      "A security-focused discussion on how email systems are protected through encryption, authentication, and threat detection to prevent phishing and social engineering attacks.",
    date: "December 4, 2025",
    badgeLeft: "InfoSec",
    badgeRight: "9 min read",
    image: "/Email Security.jpg",
  },
];

  // FADE-IN ANIMATION ON SCROLL
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="blog"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
      ref={ref}
    >
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-5 text-center">BLOG</h2>
      <p className="text-center text-gray-300 mt-2 mb-12 max-w-xl mx-auto">
        Read articles and professional insights focused on development, technology, design, and security.
      </p>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center"
        variants={cardVariants}
        initial="hidden"
        animate={controls}
      >
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/blog${blog.id}`} className="w-full flex justify-center">
            {/* CARD — FIXED HEIGHT */}
            <motion.div
              className="bg-gradient-to-br from-[#360185] to-[#5459AC] 
                         w-80 h-[420px] rounded-xl shadow-lg overflow-hidden 
                         hover:scale-[1.03] transition-transform cursor-pointer flex flex-col"
            >
              {/* IMAGE SECTION */}
              <div className="relative w-full h-44">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* BADGES */}
                <span className="absolute top-2 left-2 bg-[#360185] text-white text-xs px-3 py-1 rounded-full">
                  {blog.badgeLeft}
                </span>

                <span className="absolute top-2 right-2 bg-[#DDDDDD] text-[#44444E] text-xs px-3 py-1 rounded-full">
                  {blog.badgeRight}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                {/* DATE */}
                <p className="text-sm text-gray-300 mb-2">{blog.date}</p>

                {/* TITLE */}
                <h3 className="text-lg font-bold leading-snug mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* ACTION LINK */}
                <div className="mt-auto">
                  <span className="flex items-center gap-2 text-[#D1C4FF] hover:text-white transition font-medium">
                    Read More <FiExternalLink />
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}