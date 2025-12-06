'use client';

import { ExternalLink, Download } from "lucide-react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="py-20 px-6 w-full bg-white"
    >
      {/* SECTION TITLE */}
      <h2 className="text-3xl font-bold mb-6 text-center text-[#360185]">
        MY RESUME
      </h2>

      {/* EMBEDDED RESUME */}
      <div className="max-w-4xl mx-auto">
        <iframe
          src="/Shania Mae Ucag_Resume.pdf"
          className="w-full h-[800px] border border-gray-300 rounded-lg shadow"
        ></iframe>

        {/* BUTTONS - NOW DIRECTLY BELOW PDF */}
        <div className="flex justify-center gap-5 mt-6">
          <a
            href="/Shania Mae Ucag_Resume.pdf"
            target="_blank"
            className="px-5 py-3 bg-[#360185] text-white rounded-lg hover:bg-[#5459AC] transition flex items-center gap-2"
          >
            <ExternalLink size={18} />
            View Resume
          </a>

          <a
            href="/Shania Mae Ucag_Resume.pdf"
            download
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}