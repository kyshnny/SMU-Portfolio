'use client';

import { motion, useAnimation } from "framer-motion";
import { easeOut } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectsSection() {
  const projects = [
    {
      title: "KPOP-ON",
      tools: "React, HTML, CSS, JavaScript",
      description:
        "A K-pop showcase and e-commerce website featuring popular groups, their members, and albums. Includes a built-in store for purchasing official merchandise.",
      image: "/pic1.jpg",
      link: "#",
    },
    {
      title: "NEU OJT",
      tools: "React, HTML, CSS, JavaScript",
      description:
        "A web-based system that helps students track their OJT attendance and completed hours. Administrators can monitor and manage records easily.",
      image: "/pic1.jpg",
      link: "#",
    },
    {
      title: "NEU VIOMATE",
      tools: "React Native, TypeScript, Supabase",
      description:
        "A mobile + web app for recording, tracking, and managing student violations, featuring secure cloud-based storage and real-time monitoring.",
      image: "/pic1.jpg",
      link: "#",
    },
    {
      title: "NEU Campus Navigator",
      tools: "React Native, TypeScript",
      description:
        "A smart navigation system using the A* pathfinding algorithm to simulate optimized routing within a campus environment.",
      image: "/pic1.jpg",
      link: "#",
    },
    {
      title: "Dog Emotion Recognition (Ongoing)",
      tools: "Python",
      description:
        "A multi-modal ML system that analyzes a dog's facial expressions and body movements using CNN + RNN to classify emotions.",
      image: "/pic1.jpg",
      link: "#",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-black text-white">
      <h2 className="text-3xl font-bold mb-5 text-center">PORTFOLIO</h2>
      <p className="text-center text-gray-300 mt-2 mb-12 max-w-xl mx-auto">
        Collection of developed systems, applications, and technical outputs.
      </p>

      <div className="relative max-w-6xl mx-auto" ref={ref}>

        {/* LEFT ARROW — hidden on mobile */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:text-[#5459AC] transition"
        >
          <FiChevronLeft />
        </button>

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 py-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-[#360185] to-[#5459AC] text-white rounded-lg shadow-lg p-4 flex flex-col snap-center relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* TOOLS TAG (Top-Right corner) */}
                <span className="absolute top-5 right-5 z-20 bg-[#5459AC] bg-opacity-70 px-3.5 py-0.5 text-xs rounded-full">
                    {project.tools}
                </span>


              {/* IMAGE */}
              <div className="w-full h-48 mb-4 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              <h3 className="font-semibold text-xl text-center mb-3">
                {project.title}
              </h3>

              <p className="text-center mb-4 text-sm">{project.description}</p>

              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-[#450693] text-[#360185] hover:text-white px-4 py-2 rounded transition"
                >
                  View Project <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT ARROW — hidden on mobile */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-20 text-white text-5xl hover:text-[#5459AC] transition"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}